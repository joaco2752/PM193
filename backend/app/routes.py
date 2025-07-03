from fastapi import APIRouter #sistema de rutas
from data import nombres #del data.py importo los nombres (datos)

router = APIRouter() #creamos un objeto para poder definir las rutas

@router.get("/nombres") # definimos ruta (o endpoint) GET llamada nombres
def get_nombre(): #esta funcion se ejecuta cuando alguien usa el /nombres
    return nombres #nos regresará la lista de los nombres

# Sirve como buena practica para seccionar bien las rutas que tenemos
# y asi no amontonar todo en el main