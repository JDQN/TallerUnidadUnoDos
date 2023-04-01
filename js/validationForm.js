import { regexForm } from "./regexForm.js";

const regex = new regexForm();

export function validarForm(evento) {
  evento.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const city = document.getElementById("city").value.trim();
  const typeDocument = document.getElementById("typeDocument").value.trim();
  const numberDocuemt = document.getElementById("numberDocuemt").value.trim();

  switch (true) {
    case name === "":
      mostrarAlerta("Por favor ingrese su nombre");
      break;
    case !regex.validarName(name):
      mostrarAlerta("Por favor ingrese un nombre válido");
      break;
    case email === "":
      mostrarAlerta("Por favor ingrese su correo electrónico");
      break;
    case !regex.validarEmail(email):
      mostrarAlerta("Por favor ingrese un correo electrónico válido ''example@example.com");
      break;
    case address === "":
      mostrarAlerta("Por favor ingrese su dirección");
      break;
    case phone === "":
      mostrarAlerta("Por favor ingrese su teléfono");
      break;
    case !regex.validarPhone(phone):
      mostrarAlerta("Por favor ingrese un teléfono válido entre 7 y 14 dígitos");
      break;
    case city === "":
      mostrarAlerta("Por favor ingrese su ciudad");
      break;
    case typeDocument === "":
      mostrarAlerta("Por favor ingrese su documento");
      break;
    case numberDocuemt === "":
      mostrarAlerta("Por favor ingrese su número de documento");
      break;

    default:
      Swal.fire({
        position: 'top-end',
        title: "Exito!",
        text: "Formulario enviado correctamente",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.submit();
      });
  }
}

function mostrarAlerta(mensaje) {
  Swal.fire({
    title: "Error!",
    text: mensaje,
    icon: "error",
    confirmButtonText: "Reintentar",
  });
}

