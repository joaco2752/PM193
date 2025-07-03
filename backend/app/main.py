from fastapi import FastAPI #importar la clase principal
from fastapi.middleware.cors import CORSMiddleware #esto permite que otras apps se conecten (React Native)
from routes import router #importar las rutas del archivo routes.py

app = FastAPI() #crearemos la app principal

#Filtro de seguridad
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], #permitimos que el frod
    allow_credentials=True, #permitimos credenciales
    allow_methods=["*"], #permitimos todos los metodos
    allow_headers=["*"], #permitimos encabezados
)

app.include_router(router)
# le decimos que use todas las rutas que se encuentran en el router creado