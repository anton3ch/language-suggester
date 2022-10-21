function hideResults() {
  document.getElementById("resultName").setAttribute("class", "hidden");
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("swift").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
}


window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    hideResults();
    const name = document.querySelector("input#inputName").value;
    // const zodiac = document.querySelector("input#zodiacSelect").value;
    // const catDog = document.querySelector("input[name='catDog']:checked").value;
    // const research = document.querySelector("input[name='research']:checked").value;
    // const experience = document.getElementById("experienceCheck").checked;

    

    if (name) {
      document.querySelector("span#insertName").innerText = name;
      document.getElementById("resultName").removeAttribute("class");

      // if(){

      // } else if() {

      // } else if {}
    } else {
      document.querySelector("h1").innerText = "Please, input your name!".toUpperCase();
      document.querySelector("h1").style.color = "linear-gradient(166deg, rgba(232,85,85,1) 0%, rgba(61,46,150,1) 100%)";
    }
    
  });
});