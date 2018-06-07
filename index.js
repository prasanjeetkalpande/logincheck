function myFunction() {
 var name=document.getElementById('um').value;
  var password=document.getElementById('pass').value;
 
 
  if (name=="amar" && password=="pass") {
         document.getElementById("dis").innerHTML="succesfully";
    //window.location.replace("https://www.w3schools.com")
  
    window.location = " https://prasanjeetkalpande.github.io/streetlight/";
//window.location.href = "https://www.w3schools.com";
        // window.open("https://www.w3schools.com");

          // Window.close();
        }
  else {
         document.getElementById("dis").innerHTML="Invalide data";
       }
}
