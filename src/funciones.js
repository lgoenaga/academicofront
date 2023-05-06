import Swal from "sweetalert2";
import axios from "axios";
import "animate.css";

export function mostrarAlerta(titulo, icono, foco = "") {
  if (foco != "") {
    document.getElementById(foco).focus();
  }

  Swal.fire({
    title: titulo,
    icon: icono,
    customClass: { confirmButton: "btn btn-primary" },
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    buttonsStyling: false,
    allowEscapeKey: false,
    backdrop: "linear-gradient(#e0f7fa, #eceff1,#fffde7)",
    background: 'rgb(224,224,224)',
    timer: 20000
  });
}

export function confirmar(URI, id, titulo, mensaje, imagen) {
  var url = URI + "/" + id;

  const sweetBootsrap = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success me-3",
      cancelButton: "btn btn-danger",
    },
  });

  sweetBootsrap
    .fire({
      title: titulo,
      text: mensaje,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      showCancelButton: true,
      confirmButtonText: '<i class="fa-solid fa-check"></i> Si, Eliminar',
      cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
      allowEscapeKey: false,
      imageUrl: imagen,
      backdrop: "linear-gradient(#e0f7fa, #eceff1,#fffde7)",
      background: 'rgb(224,224,224)',
      timer: 20000
    })
    .then((res) => {
      if (res.isConfirmed) {
        enviarSolicitud("DELETE", { id: id }, url, "Eliminado con exito");
      } else {
        mostrarAlerta("Operacion Cancelada", "info");
      }
    });
}

export function enviarSolicitud(metodo, parametros, URI, mensaje) {
  axios({ method: metodo, url: URI, data: parametros })
    .then(function (res) {
      var estado = res.status;
      if (estado == 200) {
        mostrarAlerta(mensaje, "success");
        window.setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      } else {
        mostrarAlerta("Error de servidor", "error");
      }
    })
    .catch(function (error) {
      mostrarAlerta("Servidor no disponible", "error");
    });
}
