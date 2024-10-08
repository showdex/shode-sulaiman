function showAlertBeforeOpening(link) {
  alert("This project is still incomplete.");
  window.open(link, "_blank");
}


document.querySelectorAll("a.incomplete-project").forEach(function(linkElement) {
  linkElement.addEventListener("click", function(event) {
    event.preventDefault(); 
    const link = linkElement.getAttribute("href"); 
    showAlertBeforeOpening(link); 
  });
});
