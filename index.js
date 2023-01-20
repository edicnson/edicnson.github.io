function mostrarExperiencia(event) { //Funcion para agregar o quitar la clase ocultar en el elemento con id MiExperiencia
    var texto_trabajo=document.getElementById("MiExperiencia")
    texto_trabajo.classList.toggle("ocultar");
  }
  function mostrarEducacion(event) { //Funcion para agregar o quitar la clase ocultar en el elemento con id Educacion
    var texto_educacion=document.getElementById("MiEducacion")
    texto_educacion.classList.toggle("ocultar");
  }
  function mostrarCursos(event) {   //Funcion para agregar o quitar la clase ocultar en el elemento con id Cursos
    var texto_cursos=document.getElementById("Cursos")
    texto_cursos.classList.toggle("ocultar");
  }
  function mostrarLogros(event) {   //Funcion para agregar o quitar la clase ocultar en el elemento con id Logros
    var texto_logros=document.getElementById("Logros")
    texto_logros.classList.toggle("ocultar");
  }
  //Al hacer click en Experiencia ejecuta la funcion asociada
  var Mi_experiencia=document.getElementById("bt_experiencia")  
  Mi_experiencia.addEventListener('click', mostrarExperiencia);

  //Al hacer click en Educacion ejecuta la funcion asociada
  var Mi_educacion=document.getElementById("bt_educacion")
  Mi_educacion.addEventListener('click', mostrarEducacion);

  //Al hacer click en Cursos ejecuta la funcion asociada
  var Mis_cursos=document.getElementById("bt_cursos")
  Mis_cursos.addEventListener('click', mostrarCursos);

  //Al hacer click en Logros ejecuta la funcion asociada
  var Mis_logros=document.getElementById("bt_logros")
  Mis_logros.addEventListener('click', mostrarLogros);






