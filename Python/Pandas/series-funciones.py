import pandas as pd
numeros = pd.Series([1,2,3,4,5,6,7,8,9])
print(numeros.sum())
print(numeros.max())
print(numeros.min())

#Desviación estándar
print(numeros.std())

#Resumen
print(numeros.describe())

serie = pd.Series({'Matemáticas':8,'Economía':6,'Programación':10,'Física':5})
print(serie[serie > 6])
print(serie.sort_values()) #Ordena de menor a mayor
print(serie.sort_index(ascending=True)) #Ordena de menor a mayor (Por letras )
print(serie.sort_index(ascending=False)) #Ordena de mayor a menor (Por letras)

#Valor escalar
data = 5
series = pd.Series(data, index = [0,1,2,3,4,5])
print(series)

#Índice definido
data_list = ['Messi','Cristiano Ronaldo', 'Benzema']
indices = ['PSG', 'Manchester United', 'Real Madrid']
futbol = pd.Series(index=indices, data=data_list)
print(futbol)