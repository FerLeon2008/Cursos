import pandas as pd

# Crear una serie a partir de un array
colores = pd.Series(['rojo','azul','amarillo','verde','morado'])
print(colores)

#Crear una serie a partir de un diccionario
materias = pd.Series({'Matematicas':60, 'Fisica':100, 'Quimica':78})
print(materias)

#Propiedades de una serie
numeros = pd.Series([1,2,3,4,5,6,7,8,9])
print(numeros.size)
print(numeros.index)
print(numeros.dtype)

print(colores[2:4])

print(materias[['Fisica','Quimica']])

#Operaciones
print(numeros * 2)