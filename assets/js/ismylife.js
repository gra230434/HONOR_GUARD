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

function openVideo(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
