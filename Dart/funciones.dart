void main () {
  imprimirMensaje();
  String nombre = devolverNombre();
  print(nombre);

  String texto = 'hola';
  print('la palabra en minuscula es: $texto, Y en mayusculas es: ${pasarAMayusculas(texto)}');

  parametrosOpcionales('Juan',16);
  
  var lista =['luis', 'maria', 'juan'];
  lista.forEach((item) {
    String nombreMayus = item.toUpperCase();
    print('el nombre en la posicion ${lista.indexOf(item)} es $nombreMayus');
  });

  imprimirMensaje2();
  String nombre2 = devolverNombre2();
  print(nombre2);
}

void imprimirMensaje(){
  print('Holaaaaa');
}

void imprimirMensaje2() => print('Holaaaaa 2');

String devolverNombre(){
  String nombre = 'Juan';
  return nombre;
}

String devolverNombre2() => 'Juan';

String pasarAMayusculas(String texto){
  String enMayusculas = texto.toUpperCase();
  return enMayusculas;
}

String parametrosOpcionales(String nombre, [int? edad]){
  if(edad != null){
    return '$nombre tiene $edad años';
  }else{
    return '$nombre no tiene edad';
  }
}