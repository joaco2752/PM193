const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 300 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 }
];

// Tu código aquí
const nombres = productos.filter(producto => producto.precio > 1000).map(producto => producto.nombre);
console.log(nombres); // ["Laptop", "Monitor", "Mouse", "Teclado"]