//Declaración de variables
var nombreUsuario = "Luigi";
var saldoCuenta = 10000;
var limiteExtraccion = 1500;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function sumarDinero (a){
  saldoCuenta += a;
}

function restarDinero (a){
  saldoCuenta -= a;
}
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
var nuevoLimite = parseInt(prompt("Ingrese nuevo límite extracción"));
limiteExtraccion = nuevoLimite;
actualizarLimiteEnPantalla(nuevoLimite);
alert("tu nuevo límite de extracción diaria es: $" + limiteExtraccion);
}

function extraerDinero() {
  var cantidadRetiro = parseInt(prompt("Ingrese la cantidad de dinero que desea retirar "));
  var saldoAnterior = saldoCuenta ;
  saldoActual = saldoCuenta - cantidadRetiro;
  if(cantidadRetiro%100!==0){
           alert("solo puedes extraer billetes de 100");
           return true;
      }
  if (cantidadRetiro > limiteExtraccion){
    alert("el retiro es superior al limite permitido");
  } else if (cantidadRetiro < saldoCuenta){
      alert("Has Retirado: $" + cantidadRetiro + "\nSaldo anterior: $" + saldoAnterior + " \nSaldo actual: $" + saldoActual);
      restarDinero(cantidadRetiro);
      actualizarSaldoEnPantalla(saldoCuenta);
    }  else {
    alert("No hay saldo disponible para el retiro que estás haciendo");
  }
}




function depositarDinero() {
    var cantidadDeposito = parseInt(prompt("Ingrese la cantidad de dinero que desea depositar "));
    var saldoAnterior = saldoCuenta;
    sumarDinero(cantidadDeposito);
    actualizarSaldoEnPantalla(saldoCuenta);
    alert("Has depositado: $" + cantidadDeposito + "\nSaldo anterior: $" + saldoAnterior + " \nSaldo actual: $" + saldoCuenta);
}

function pagarServicio() {
var tipoServicio = parseInt(prompt("ingrese el número que corresponda con el servicio que queres pagar \n1 - Agua \n2 - Luz   \n3 - Internet  \n4 - Teléfono"));
var saldoAnterior = saldoCuenta;
var dineroDescontado1 = agua;
var dineroDescontado2 = luz;
var dineroDescontado3 = internet;
var dineroDescontado4 = telefono;
var saldoActual = saldoCuenta - tipoServicio;
switch (tipoServicio) {
  case 1:
    saldoCuenta -= agua
    break;
    case 2:
      saldoCuenta -= luz
      break;
      case 3:
        saldoCuenta -= internet
        break;
        case 4:
          saldoCuenta -= telefono
          break;
  default:
    alert("No existe el servicio que se ha seleccionado");
   }

   if (tipoServicio ===1) {
     alert ("Has pagado el servicio de Agua" + "\nSaldo anterior $" + saldoAnterior + "\nDinero descontado $" + dineroDescontado1 + "\nSaldo Actual $" + saldoCuenta);
   }else if (tipoServicio ===2){
     alert ("Has pagado el servicio de Luz" + "\nSaldo anterior $" + saldoAnterior + "\nDinero descontado $" + dineroDescontado2 + "\nSaldo Actual $" + saldoCuenta);
   }else if (tipoServicio ===3){
       alert ("Has pagado el servicio de Internet" + "\nSaldo anterior $" + saldoAnterior + "\nDinero descontado $" + dineroDescontado3 + "\nSaldo Actual $" + saldoCuenta);
     }else if (tipoServicio ===4){
           alert ("Has pagado el servicio de Teléfono" + "\nSaldo anterior $" + saldoAnterior + "\nDinero descontado $" + dineroDescontado4 + "\nSaldo Actual $" + saldoCuenta);
           }
actualizarSaldoEnPantalla(saldoCuenta);
}


function transferirDinero() {
var cuentaAdriana = 1234567;
var cuentaMari = 2345678;
var cantidadtransferencia = parseInt(prompt("Ingrese la cantidad de dinero que desea transferir "));
if (cantidadtransferencia > saldoCuenta){
alert("No puede transferirse esa cantidad de dinero no tiene fondos suficientes");
return true;
}
var numeroDeCuenta = parseInt(prompt("Ingrese el numero de cuenta a la que desea transferir el dinero "));
if (numeroDeCuenta === cuentaAdriana){
  alert("estas transfiriendo a la cuenta de Adriana");
   saldoCuenta -= cantidadtransferencia;
  actualizarSaldoEnPantalla(saldoCuenta);
} else if (numeroDeCuenta ===cuentaMari) {
  alert("estas transfiriendo a la cuenta de Mari");;
  saldoCuenta -= cantidadtransferencia;
  actualizarSaldoEnPantalla(saldoCuenta);
}else {
  alert ("Esa cuenta no se encuentra registrada");
    }


}

function iniciarSesion() {
debugger;
var codigoSeguridad = 1234;
var pedidoCodigo = parseInt(prompt("Ingrese su clave"));
if (codigoSeguridad === pedidoCodigo){
  alert("Bienvenido Luigi ya puedes comenzar a realizar operaciones");
  return true;
} else {
  alert("Codigo incorrecto. Tu dinero ha sido retenido por cuenstiones de Seguridad ")
  saldoCuenta = 0;
  return false;
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

iniciarSesion();
