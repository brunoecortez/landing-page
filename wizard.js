var currentTab = 0; // La pestaña actual está configurada para ser la primera pestaña (0)
showTab(currentTab); // Muestra la pestaña actual

function showTab(n) {
  //Esta función mostrará la pestaña especifica del formulario
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  //...y ordena los botones previo Previous/Next:
  
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n ==  2) {
    document.getElementById("nextBtn").innerHTML = "Resumen";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  if (n == x.length - 1) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
    let ciudad = document.getElementById("ciudad").value;
    let provincia = document.getElementById("provincia").value;
    
    let comentario = document.getElementById("especifico").value;
    let cantidad = document.getElementById("cantidad").value;

    document.getElementById("nombreCompleto").value =
      nombre + " " + apellido;
    document.getElementById("mail").value = correo;

    document.getElementById("datos").value =
       direccion + " - " + ciudad + " - " + provincia;
    

    document.getElementById("leyenda").value =
      "Solicito la cotización de " + 
      comentario +
      ". La cantidad solicitada es de " +
      cantidad +
      " unidades.";

    document.getElementById("nextBtn").innerHTML = "Enviar";
  } else {
    document.getElementById("nextBtn").innerHTML = "Siguiente";
  }
  //...y corre una función que muestra el indicador de paso correcto:
 
  IndicadorPaso(n);
}

function nextPrev(n) {
  // Esta función determinará que pestaña mostrar:
  var x = document.getElementsByClassName("tab");
  // Sale de la función si algún campo en la pestaña actual no es válido:
  if (n == 1 && !validaForm()) return false;
  // Oculta la pestaña actual:
  x[currentTab].style.display = "none";
  // Aumenta o disminuye la pestaña actual en 1:
  currentTab = currentTab + n;
  // si llegó al final del formulario...:   
  if (currentTab >= x.length) {
    //...el formulario se envía:
    
    document.getElementById("regForm").submit();
    return false;
  }
  // De lo contrario mostrar la pestaña correcta:
  showTab(currentTab);
}

function validaForm() {
  
  // Esta función se ocupa de la validación de los campos del formulario
 
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // Un ciclo que verifica cada campo de entrada en la pestaña actual:
  for (i = 0; i < y.length; i++) {
    // Si el campo está vacío...
    
    if (y[i].value == "") {
      // agrega una clase "invalid" al campo:
      y[i].className += " invalid";
      // y configura el estado valid a falso:
      
      valid = false;
    }
    else {
      
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const email = document.getElementById("correo");
      
      const parrafo = document.getElementById("aviso");
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let aviso = ""
      if(nombre.value.length <3){
               
        aviso = "El nombre es muy corto <br>"
        
        valid = false
        
      }else
      if(apellido.value.length <6){
       
        aviso = "El apellido es muy corto <br>"
        
        valid = false;
        
      }else
      
      if(!regexEmail.test(email.value)){
        aviso = "Email no válido <br>"        
        valid = false;
       }
            
      if(!valid){
        parrafo.innerHTML = aviso
      }else{
        parrafo.innerHTML = ""
  
      }
     
    }
  }
  // Si el valid es verdadero, marca el paso como finalizado y válido:
  
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 
}

function IndicadorPaso(n) {
  // Esta función elimina la clase "active" de todos los pasos...
  
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... y agrega la clase "active" al paso actual:
  
  x[n].className += " active";
}



