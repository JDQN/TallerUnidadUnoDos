import { validarForm } from "./validationForm.js";

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", validarForm);
});
