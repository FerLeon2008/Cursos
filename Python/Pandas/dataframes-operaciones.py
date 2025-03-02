import pandas as pd

df = pd.read_csv('estudiantes.csv')

#Coordenada de localización
df.iloc[1 ,3] #Filas y Columnas

#Por rangos
df.iloc[2,:3]

#Acceder a elementos mediante un nombre
##df.iloc[:3,('NOMBRE','EDAD')]

#Añadir columnas
df['TURNO'] = pd.Series(['Tarde','Noche','Tarde','Noche','Noche','Tarde'])
print(df)

#Eliminado una columna
SEMESTRE = df.pop('SEMESTRE')
print(df)

#Añadir una fila
df = pd.concat([df, pd.Series(['Carlos', 27, 'M', 'Sociología', 'Tarde'],
                       index=['NOMBRE', 'EDAD', 'GENERO', 'CARRERA', 'TURNO']).to_frame().T], ignore_index=True)
print(df)

#Eliminar una fila
print(df.drop([1,2]))

#Filtrado de filas
print(df[(df['GENERO'] == 'F') & (df['EDAD'] >= 22)])

#Ordenar un DataFrame
print(df.dropna())