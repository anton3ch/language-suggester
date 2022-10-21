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
    const zodiac = document.querySelector("input#zodiacSelect").value;
    const catdog = document.querySelector("input[name='catdog']:checked").value;
    const research = document.querySelector("input[name='research']:checked").value;
    const experience = document.getElementById("experienceCheck").checked;


    
  });
});