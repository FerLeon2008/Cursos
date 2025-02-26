import pandas as pd
## df = pd.read_excel('estudiantes.xlsx')
## df.to_csv('estudiantes.csv', index=None, header=True)

convertido = pd.read_csv('estudiantes.csv')
print(convertido)