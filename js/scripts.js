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
    document.getElementById("hidden5").setAttribute("class", "hidden");
    let name = document.querySelector("input#inputName").value;

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
  });

  const selectedDog = document.getElementById("dogRadioLabel");
  const dogHover = document.getElementById("dogHover");
  
  dogHover.addEventListener("mouseover", function() {
      selectedDog.innerText = "Please, make a better choice!";
  });
  dogHover.addEventListener("mouseout", function() {
    selectedDog.innerText = "Dogs";
  });


  const next1 = document.getElementById("next1");
  const next2 = document.getElementById("next2");
  const next3 = document.getElementById("next3");
  const next4 = document.getElementById("next4");
  const back1 = document.getElementById("back1");
  const back2 = document.getElementById("back2");
  const back3 = document.getElementById("back3");
  const back4 = document.getElementById("back4");

  const hidden1 = document.getElementById("hidden1").classList;
  const hidden2 = document.getElementById("hidden2").classList;
  const hidden3 = document.getElementById("hidden3").classList;
  const hidden4 = document.getElementById("hidden4").classList;
  const hidden5 = document.getElementById("hidden5").classList;

  
  next1.addEventListener("click", function() {
    let name = document.querySelector("input#inputName").value;
    if (name) {
    document.querySelector("h1").setAttribute("class", "hidden");
    hidden2.remove('hidden');
    hidden1.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__pulse");
    } else {
      document.querySelector("h1").innerText = "Please, input your name!".toUpperCase();
      document.querySelector("h1").style.color = "white";
      document.querySelector("h1").style.fontSize = "4em";
      document.querySelector("h1").style.textShadow = "2px 2px 2px gray";
      document.querySelector("h1").setAttribute("class", "text-center animate__animated animate__flash");
    }
  }); 

  next2.addEventListener("click", function() {
    hidden3.remove('hidden');
    hidden2.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__swing");
  });

  next3.addEventListener("click", function() {
    hidden4.remove('hidden');
    hidden3.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__pulse");
  });

  next4.addEventListener("click", function() {
    hidden5.remove('hidden');
    hidden4.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__swing");

  });
  
  back1.addEventListener("click", function() {
    hidden1.remove('hidden');
    hidden2.add("hidden");
    document.querySelector("h1").classList.remove("hidden");
    document.querySelector("h1").classList.add("text-center");
    document.querySelector("h1").innerText = "Welcome to the Programming Language Suggester";
    document.querySelector("h1").style.fontSize = "2em";
    document.querySelector("body").setAttribute("class", "container animate__animated animate__shakeX");
  });

  back2.addEventListener("click", function() {
    hidden2.remove('hidden');
    hidden3.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__headShake");
  });

  back3.addEventListener("click", function() {
    hidden3.remove('hidden');
    hidden4.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__shakeX");
  });

  back4.addEventListener("click", function() {
    hidden4.remove('hidden');
    hidden5.add("hidden");
    document.querySelector("body").setAttribute("class", "container animate__animated animate__headShake");
  });

});