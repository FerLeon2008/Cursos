import pandas as pd

#Creación de un DataFrame a partir de una lista
df = pd.DataFrame([['Natividad',27],['Erick',28],['Giovanni',18],['Fernando',36]],
                  columns=['NOMBRE', 'EDAD'])
print(df)

#Creación de un DataFrame a partir de un diccionario
data = {'NOMBRE': ['Natividad','Erick','Giovanni','Fernando'],
        'APELLIDO': ['Rodíguez', 'Romero', 'Ramirez', 'León'],
        'CORREO': ['Nati@gmail.com','RomeroRa@outlook.com', 'GioRa@hotmail.com', 'Leongar@gmail.com']
        }
estudiantes = pd.DataFrame(data)
print(estudiantes)

#Creación de un DataFrame a partir de un array
import numpy as np

array = pd.DataFrame(np.random.randn(4,3), columns=['a','b','c'])
print(array)

