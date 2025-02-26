void main() {
  String message = 'Hello World';
  print(message);

  //Numeros
  int miEntero = 3;
  double miDouble = 3.14159;
  
  var resultado = miEntero + miDouble;
  print(resultado);

  int? miConversion = int.tryParse(miDouble.toString());
  print(miConversion);

  //String
  String miTexto ='Hola';
  int num = 12;
  String convertir = num.toString();
  String miMayus = miTexto.substring(1,miTexto.length);
  print(miMayus);


  //dinamic
  dynamic miVariable;
  miVariable = 3;
  print(miVariable);
  miVariable = 'Hola';
  print(miVariable);

  //final y const
  final miFinal = 'Hola';
  const miConst = 'Hola';
  print(miFinal);
  print(miConst);

  //Listas
  List<int> miLista = [];
  miLista.add(1);
  miLista.add(5);

  print(miLista[1]);

  //Diccionarios
  Map miMapa = {
    'nombre': 'Juan',
    'edad': 30
  };
  print(miMapa['nombre']);
}

