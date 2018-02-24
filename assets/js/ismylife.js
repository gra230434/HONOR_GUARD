function loadVideoList( pageName ) {
  const pageNameHtml = pageName + ".html"
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("mainpage").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", pageNameHtml, true);
  xhttp.send();
};

$(document).ready(function() {
    $( ".opener" ).click(function(event) {
      loadVideoList(event.target.id);
    });
});
