import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantCard = ({ name, address, distance, phone, image, rating }) => {
  return (
    <View style={styles.card}>
      {/* Imagen de restaurante o placeholder */}
      <Image
        source={{ uri: image || "https://via.placeholder.com/300x200?text=Sin+Imagen" }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <Text style={styles.text} numberOfLines={1}>Dirección: {address}</Text>
        <Text>Distancia: {distance} km</Text>
        <Text>Teléfono: {phone}</Text>
        {rating !== null && (
          <Text style={styles.rating}>Calificación: {rating} ⭐</Text>
        )}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 18,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
    color: "#222",
  },
  text: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FF9500",
    marginTop: 4,
  },
});

export default RestaurantCard;