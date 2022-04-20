console.log("Funcionando...");

// leo el formulario con form-data
const formulario = document.querySelector("#mi-formulario");

const btnEnviar = document.querySelector("#btn-enviar");

const btnCargando = document.querySelector("#btn-cargando");

const miToast = document.querySelector(".toast");

// pongo a la escucha el formulario del eveto submit (submit es el tipo de boton
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //para capturar datos del form
  const datos = new FormData(formulario);

  console.log("campo email", datos.get("emailCampo"));

  console.log("campo pass", datos.get("passCampo"));

  console.log("campo check", datos.get("checkCampo"));

  btnEnviar.classList.add("d-none");
  btnCargando.classList.remove("d-none");
  window.setTimeout(() => {
    btnEnviar.classList.remove("d-none");
    btnCargando.classList.add("d-none");

    const eventToast = new bootstrap.Toast(miToast);
    eventToast.show();
  }, 3000); //3segundos
  formulario.reset(); //para resetear el formulario y se limpie cuando damos enviar (no lo hace css)
});
