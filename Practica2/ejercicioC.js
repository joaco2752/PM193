const personas = [
    { nombre: "Ana", edad:22},
    { nombre: "Luis", edad:35},
    { nombre: "Maria", edad:28}
];

const sujetoLuis = personas.find(persona => persona.nombre === "Luis");
console.log("Se ha encontrado a:",sujetoLuis.nombre);

personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

const edades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma total de edades:", edades);