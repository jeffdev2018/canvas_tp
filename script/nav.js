'use strict';

// ouvrir le menu nav
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

// fermer le menu nav
function closeNav() {

    document.getElementById("sideNavigation").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
    //document.getElementById("palette").style.display = "block";
    //document.getElementById("editor").style.marginLeft = "0";

}

// afffiche les plans dans une liste
function display(list) {
    list.innerHTML="";

    for (let i = 0; i < localStorage.length; i++){

        let item = document.createElement("li");
        item.className = "liDraw";
        let itemDiv = document.createElement("button");
        //itemDiv.setAttribute("class", "deleteMe");
        itemDiv.className = "deleteMe";
        itemDiv.style.display = "none";
        itemDiv.innerText= "X";
        let a = document.createElement("a");
        //item.textContent = localStorage.getItem(localStorage.key(i).);
        a.setAttribute("href", "#");
        a.textContent = localStorage.key(i);
        item.appendChild(a);
        a.appendChild(itemDiv);
        list.appendChild(item);
        item.addEventListener("click", function(){
            console.log("good morning  I am li!!!");
            let cle =$(this).children().text().slice(0,-1);
            console.log("cle ="+ cle);
            document.getElementById("editor").innerHTML = localStorage.getItem(cle);
            init();
            initBG();
            planKey = cle;
            document.getElementById("titre_plan").textContent = planKey;
        });

    }
}
