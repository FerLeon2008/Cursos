void main () {
  bool programador = false;
  bool disenador = true;
  String profesion = 'programador';


  //if y if-else
  if (programador) {
    print('Eres programador');
  } else if(disenador){
    print('Eres disenador');
  }else {
    print('No eres programador');
  }

  //switch
  switch(profesion){
    case 'programador':
      print('Eres programador');
      break;
    case 'disenador':
      print('Eres disenador');
      break;
    default:
      print('No eres programador ni disenador');
  }

  //Operador ternario
  String mensaje = programador ? 'Eres programador' : 'No eres programador';
  print(mensaje);

  //for
  for (int i = 0; i < 5; i++) {
    print('el valor es'+i.toString());
  }

  List lista = ['fer', 'erick', 'maría'];
  for(var elemento in lista){
    print(elemento);
  }

  //while
  bool parar = true ;
  int contador = 0;
  while(parar){
    if(contador < 5){
      print(contador);
      contador++;
    }else{
      parar = false;
    }
  }

  //do-while
  do{
    if(contador < 5){
      print(contador);
      contador++;
    }else{
      parar = false;
    }
  }while(parar);

  print('fin');

}