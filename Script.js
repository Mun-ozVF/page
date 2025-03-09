function validar(form) {
  // Función para desinfectar la entrada (bloquea etiquetas y atributos peligrosos)
  function sanitizeInput(input) {
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Función para evitar etiquetas HTML en la entrada
  function hasHtmlTags(input) {
    return /<\/?[a-z][\s\S]*>/i.test(input);
  }

  // Validar nombre (sin etiquetas ni caracteres especiales)
  var nombre = form.nombre.value.trim();
  if (nombre === "" || hasHtmlTags(nombre)) {
    alert("FATAL ERROR. Considere eliminar System32/");
    return false;
  }
  nombre = sanitizeInput(nombre); // Aplicar sanitización

  // Validar edad (debe ser un número entero positivo)
  var edad = form.edad.value.trim();
  if (!/^\d+$/.test(edad) || parseInt(edad) <= 0) {
    alert("Por favor, ingrese una edad válida.");
    return false;
  }

  // Validar selección de sexo
  var sexo = form.sexo.value;
  if (sexo === "") {
    alert("Por favor, seleccione su sexo.");
    return false;
  }

  // Validar deporte favorito
  var deporte = form.deporte.value;
  if (deporte === "ninguno") {
    alert("Por favor, seleccione un deporte favorito.");
    return false;
  }

  // Bloquear <marquee> y otras etiquetas peligrosas en todo el documento
  document
    .querySelectorAll("marquee, script, iframe, object, embed")
    .forEach((el) => {
      el.remove();
      alert("Se detectó contenido no permitido y fue eliminado.");
    });

  // Mostrar mensaje con datos válidos
  alert(
    "Datos válidos:\nNombre: " +
      nombre +
      "\nEdad: " +
      edad +
      "\nSexo: " +
      sexo +
      "\nDeporte favorito: " +
      deporte
  );

  return true;
}
