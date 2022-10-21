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
      

      if(zodiacSelected === 1 || zodiacSelected === 4 || zodiacSelected === 7 || zodiacSelected === 10){

        let research = document.querySelector("input[name='research']:checked").value;
        let experience = document.getElementById("experienceCheck").checked;

        if(research === "no" || research === "meh"){
          document.getElementById("html").removeAttribute("class");
        } else if (research === "yes" && experience === false) {
          document.getElementById("css").removeAttribute("class");
          document.getElementById("html").removeAttribute("class");
        } else if (research === "yes" && experience === true) {
          document.getElementById("javascript").removeAttribute("class");
        };

      } else if(zodiacSelected === 2 || zodiacSelected === 5 || zodiacSelected === 8 || zodiacSelected === 11) {
        
        if(research === "no" || research === "meh"){
          document.getElementById("html").removeAttribute("class");
        } else if (research === "yes") {
          document.getElementById("javascript").removeAttribute("class");
        };

      } else if(zodiacSelected === 3 || zodiacSelected === 6 || zodiacSelected === 9 || zodiacSelected === 12) {
        
        if(research === "no" || research === "meh"){
          document.getElementById("html").removeAttribute("class");
        } else if (research === "yes") {
          document.getElementById("javascript").removeAttribute("class");
        };

      };
    } else {
      document.querySelector("h1").innerText = "Please, input your name!".toUpperCase();
      document.querySelector("h1").style.color = "linear-gradient(166deg, rgba(232,85,85,1) 0%, rgba(61,46,150,1) 100%)";
    };
   
 
  });

  const selectedDog = document.getElementById("dogRadioLabel");
  const dogHover = document.getElementById("dogHover");
  
  dogHover.addEventListener("mouseover", function() {
      selectedDog.innerText = "Please, make a better choice!";
  })
  dogHover.addEventListener("mouseout", function() {
    selectedDog.innerText = "Dogs";
})
});