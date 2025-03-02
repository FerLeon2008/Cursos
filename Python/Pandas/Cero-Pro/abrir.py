import pandas as pd

df = pd.read_csv("datos.csv", encoding = 'ISO-8859-1')

df_ordenado = df.sort_values("nombre")

df_filtrado = df[df['goles']>100]
print(df_filtrado)

print(df.columns)