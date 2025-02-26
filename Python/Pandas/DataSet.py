import pandas as pd
df = pd.read_csv('ModalidadVirtual.csv')
print(df['carrera'][1])

filtrar = df['edad'] > 23
df_filtrar = df[filtrar]
print(df_filtrar)

print(df.head(10))
print(df.tail(10))
