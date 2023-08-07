const habilidades = document.getElementById("sobre_mi_1");
const experiencia = document.getElementById("sobre_mi_3");
const educación = document.getElementById("sobre_mi_2");
const resultadoNav = document.getElementById("resultado_nav");

habilidades.addEventListener("click", () => {
  resultadoNav.innerHTML = "<ul><li><p>Programacion en multiples lenguajes</p></li><li><p>Desarrollo de proyectos</p></li><li><p>Trabajo en equipo</p></li></ul>";
});

experiencia.addEventListener("click", () => {
  resultadoNav.innerHTML = "<ul><li><p>Mi experiencia son las siguientes</p></li></ul>";
});

educación.addEventListener("click", () => {
  resultadoNav.innerHTML = "<ul><li><p>Centro Educativo Zola</p></li><li><p>Universidad Carlos III</p></li><li><p>Cursos Sololearn</p></li></ul>";
});


