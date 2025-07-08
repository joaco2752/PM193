import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import RestaurantCard from "./components/restaurantCard";

const API_KEY = "36bc901a74e1431f853f91f6559eac19";
const SEARCH_RADIUS_METERS = 100000; // 100 km


export default function App() {
  const [location, setLocation] = useState("");
  const [foodType, setFoodType] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function haversineDistance(lat1, lon1, lat2, lon2) {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }

  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

  const fetchCoordinates = async (place) => {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      place
    )}&limit=1&filter=countrycode:mx&apiKey=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.features && data.features.length > 0) {
        const { lat, lon } = data.features[0].properties;
        return { lat, lon };
      } else {
        throw new Error("Lugar no encontrado");
      }
    } catch (err) {
      throw err;
    }
  };

  const fetchRestaurants = async () => {
    if (!location.trim()) {
      setError("Por favor, ingresa una ciudad, estado o lugar en México.");
      return;
    }
    if (!foodType.trim()) {
      setError("Por favor, ingresa un tipo de comida.");
      return;
    }

    setLoading(true);
    setError("");
    setRestaurants([]);

    try {
      const { lat, lon } = await fetchCoordinates(location);

      const category = `catering.restaurant.${foodType.toLowerCase()}`;

      let url = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${lon},${lat},${SEARCH_RADIUS_METERS}&limit=30&apiKey=${API_KEY}`;

      let res = await fetch(url);
      let data = await res.json();

      if (!data.features || data.features.length === 0) {
        url = `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${lon},${lat},${SEARCH_RADIUS_METERS}&limit=30&apiKey=${API_KEY}`;
        res = await fetch(url);
        data = await res.json();
      }

      if (!data.features || data.features.length === 0) {
        setError("No se encontraron restaurantes para esta búsqueda.");
        return;
      }

      const parsed = data.features.map((item) => {
  const lat2 = item.geometry.coordinates[1];
  const lon2 = item.geometry.coordinates[0];

  return {
    name: item.properties.name || "Sin nombre",
    address: item.properties.formatted || "Sin dirección",
    image:
      item.properties.img_url ||
      item.properties.image ||
      "https://via.placeholder.com/300x200?text=Sin+Imagen",
    phone: item.properties.phone || "No disponible",
    distance: haversineDistance(lat, lon, lat2, lon2).toFixed(2),
    rating: item.properties.rate || item.properties.rating || null,
  };
});

      setRestaurants(parsed);
    } catch (err) {
      setError("Ocurrió un error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Buscar Restaurantes en México</Text>

      <TextInput
        style={styles.input}
        placeholder="Ciudad, estado o lugar (ej. Toluca, Jalisco, México)"
        value={location}
        onChangeText={setLocation}
        autoCapitalize="words"
        placeholderTextColor="#999"
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo de comida (ej. tacos, sushi)"
        value={foodType}
        onChangeText={setFoodType}
        autoCapitalize="none"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={fetchRestaurants} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginVertical: 20 }} />}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        {restaurants.map((r, i) => (
          <RestaurantCard
            key={i}
            name={r.name}
            address={r.address}
            distance={r.distance}
            phone={r.phone}
            image={r.image}
            rating={r.rating}
          />
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    color: "#333",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#007AFF",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  error: {
    color: "#FF3B30",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
  },
});