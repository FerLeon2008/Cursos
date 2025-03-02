void main (){
Personas luis = Personas("Luis", "Gonzalez");
luis.nombre = "Luisa";
print(luis._nombre);

Direccion direccionMaria = new Direccion("Madrid", "28000");

Empleado maria = Empleado("Maria","Rodríguez", 1500);
print(maria.nombre);

String mensaje = luis.Hablar("Hola");
print(mensaje);
String mensaje2 = maria.Hablar("Hola");
print(mensaje2);

}

class Personas{
  String? _nombre;
  String? _apellido;
  String? telefono;
  String? email;
  Direccion? direccion;

  Personas(this._nombre, this._apellido, {this.telefono, this.email});
  Personas.full(this._nombre, this._apellido, this.telefono, this.email,this.direccion);
 
//getter 
  String get nombre => this._nombre!;
  String get apellido => this._apellido!;

//setter
  set nombre(String nombre){
    _nombre = nombre;
  }
  set apellido(String apellido){
    _apellido = apellido;
  }

  String Hablar (String mensaje){
    return("${this._nombre} dice: $mensaje");
  }

}

class Direccion{
  String? _ciudad;
  String? _codigoPostal;

  Direccion(this._ciudad, this._codigoPostal);

  //getter
  String get ciudad => this.ciudad!;
  String get codigoPostal => this.codigoPostal!;

  //setter 
  set ciudad(String ciudad){
    this.ciudad = ciudad;
  }
  set codigoPostal(String codigoPostal){
    this.codigoPostal = codigoPostal;
  }
}

class Empleado extends Personas implements Paseante{
  double? _salario;

  Empleado(String nombre, String apellido, this._salario) : super(nombre, apellido);

  String Hablar(String mensaje){
    return("${super.Hablar(mensaje)} y gana ${this._salario}");
  }

  @override
  void Caminar() {
    print("El empleado camina");
  }
}

abstract class Paseante{
    void Caminar();
  }