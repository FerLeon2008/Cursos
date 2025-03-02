import pandas as pd

#Concatenación por DataFrames/filas
df1 = pd.DataFrame({'NOMBRE': ['Fer','Erick'],
                    'CARRERAS':['Actuarias', 'Diseño Gráfico'],
                    'EDAD':[20,18]}).set_index('NOMBRE')

df2 = pd.DataFrame({'NOMBRE': ['Natividad','Giovanni'],
                    'CARRERAS':['Cinematografía', 'Ciencias Computacionales'],
                    'EDAD':[19,23]}).set_index('NOMBRE')

df3 = pd.concat([df1,df2])
print(df1)
print(df2)
print(df3)

#Concatenación por columnas
df4 = pd.DataFrame({'AUTOS':['Nissan','Ford','Audi'],
                    'COLOR':['Blanco','Azul','Rojo']}).set_index('AUTOS')

df5 = pd.DataFrame({'AUTOS':['Nissan','Ford','Audi'],
                    'MODELO':['2018','2020','2023']}).set_index('AUTOS')

df6 = pd.concat([df4,df5], axis=1)
print(df4)
print(df5)
print(df6)

#Mezclar DataFrames (Solo se mezclan los datos en común)
df7 = pd.DataFrame({'AUTOS':['Nissan','Ford','Audi'],
                    'COLOR':['Blanco','Azul','Rojo']})

df8 = pd.DataFrame({'AUTOS':['Toyota','Ford','Audi'],
                    'MODELO':['2018','2020','2023']})

df9 = pd.merge(df7,df8, on='AUTOS', how='outer')
print(df9)
