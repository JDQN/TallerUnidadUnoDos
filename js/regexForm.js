export class regexForm {
  constructor() {
    this.expresionRegularNmae = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    this.expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.expresionRegularPhone = /^\d{7,10}$/;
    this.expresionRegularNumberDocument = /^[a-zA-Z0-9]{1,30}$/;
  }
  validarName(name) {
    // Expresión regular para validar nombre
    return this.expresionRegularNmae.test(name);
  }

  validarEmail(email) {
    // Expresión regular para validar email
    return this.expresionRegularEmail.test(email);
  }

  validarPhone(phone) {
    // Expresión regular para validar teléfono
    return this.expresionRegularPhone.test(phone);
  }

  validarNumberDocument(numberDocument) {
    // Expresión regular para validar número de documento
    return this.expresionRegularNumberDocument.test(numberDocument);
  }
}
