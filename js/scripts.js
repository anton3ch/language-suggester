function hideResults() {
  document.getElementById("resultName").setAttribute("class", "hidden");
  document.getElementById("html").setAttribute("class", "hidden");
  document.getElementById("css").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    hideResults();
    let name = document.querySelector("input#inputName").value;
    let catDog = document.querySelector("input[name='catDog']:checked");

    if (name) {
      
      document.querySelector("span#insertName").innerText = name;
      document.getElementById("resultName").removeAttribute("class");
      let zodiacSelected = document.getElementById("zodiacSelect").value;
      zodiacSelected = parseInt(zodiacSelected);
      let research = document.querySelector("input[name='research']:checked").value;
      let experience = document.getElementById("experienceCheck").checked;

      if(zodiacSelected === 1 || zodiacSelected === 4 || zodiacSelected === 7 || zodiacSelected === 10){

        if (research === "yes" && experience === false) {
          document.getElementById("css").removeAttribute("class");
          document.getElementById("html").removeAttribute("class");
          document.getElementById("css").setAttribute("class", "text-center animate__animated animate__zoomIn");
          document.getElementById("html").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if (research === "yes" && experience === true) {
          document.getElementById("javascript").removeAttribute("class");
          document.getElementById("javascript").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if(research === "no"){
          document.getElementById("html").removeAttribute("class");
          document.getElementById("html").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if(research === "meh"){
          document.getElementById("css").removeAttribute("class");
          document.getElementById("css").setAttribute("class", "text-center animate__animated animate__zoomIn");
        }

      } else if(zodiacSelected === 2 || zodiacSelected === 5 || zodiacSelected === 8 || zodiacSelected === 11) {
        
        if (research === "yes" && experience === false) {
          document.getElementById("css").removeAttribute("class");
          document.getElementById("html").removeAttribute("class");
          document.getElementById("css").setAttribute("class", "text-center animate__animated animate__zoomIn");
          document.getElementById("html").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if (research === "yes" && experience === true) {
          document.getElementById("csharp").removeAttribute("class");
          document.getElementById("csharp").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if(research === "no"){
          document.getElementById("html").removeAttribute("class");
          document.getElementById("html").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if(research === "meh"){
          document.getElementById("css").removeAttribute("class");
          document.getElementById("css").setAttribute("class", "text-center animate__animated animate__zoomIn");
        }


      } else if(zodiacSelected === 3 || zodiacSelected === 6 || zodiacSelected === 9 || zodiacSelected === 12) {
        
        if (research === "yes" && experience === false) {
          document.getElementById("css").removeAttribute("class");
          document.getElementById("html").removeAttribute("class");
          document.getElementById("html").setAttribute("class", "text-center animate__animated animate__zoomIn");
          document.getElementById("css").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if (research === "yes" && experience === true) {
          document.getElementById("swift").removeAttribute("class");
          document.getElementById("swift").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if(research === "no"){
          document.getElementById("html").removeAttribute("class");
          document.getElementById("html").setAttribute("class", "text-center animate__animated animate__zoomIn");
        } else if(research === "meh"){
          document.getElementById("css").removeAttribute("class");
          document.getElementById("css").setAttribute("class", "text-center animate__animated animate__zoomIn");
        }
      }

    } else {
      document.querySelector("h1").innerText = "Please, input your name!".toUpperCase();
      document.querySelector("h1").style.color = "white";
      document.querySelector("h1").style.fontSize = "4em";
      document.querySelector("h1").style.textShadow = "2px 2px 2px gray";
      document.querySelector("h1").setAttribute("class", "text-center animate__animated animate__flash");
    }
  });

  const selectedDog = document.getElementById("dogRadioLabel");
  const dogHover = document.getElementById("dogHover");
  
  dogHover.addEventListener("mouseover", function() {
      selectedDog.innerText = "Please, make a better choice!";
  });
  dogHover.addEventListener("mouseout", function() {
    selectedDog.innerText = "Dogs";
  });
});