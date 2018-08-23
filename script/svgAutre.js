'use strict';

function openNav() {
    document.getElementById("sideNavigation").style.width = "300px";
    //document.getElementById("main").style.marginLeft = "250px";
    //document.getElementById("palette").style.display = "none";
    //document.getElementById("editor").style.marginLeft = "110px";
    if(localStorage.length === 0){

        let list = document.getElementById("listePlan");
        list.innerHTML="";
        let p = document.getElementById("erreur");
        p.textContent = "Nothing to show!!!";

    }else {
        let list = document.getElementById("listePlan");

        display(list);

    }


}


function closeNav() {

    document.getElementById("sideNavigation").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
    //document.getElementById("palette").style.display = "block";
    //document.getElementById("editor").style.marginLeft = "0";


}