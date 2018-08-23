"use strict"

// sauvegarde le plan
function set() {
    let data = document.getElementById("editor").innerHTML;

    if(planKey === undefined || planKey === null) {
        planKey = prompt("Enter le nom du plan", " ");
    }

    if (planKey != null) {
        localStorage.setItem(planKey, data);
        //document.getElementById("editor").innerHTML = firstData;
        closeNav();
        //recupere le ul vide
        let list = document.getElementById("listePlan");

        // Loop through localStorage
        let p = document.getElementById("erreur");
        p.textContent = "";
        display(list);
    }else{
        planKey = "Default";
        document.getElementById("editor").innerHTML = localStorage.getItem(planKey);
        document.getElementById("titre_plan").textContent = planKey;
        init();
        initBG();
    }

}

// cree un nouveau plan
function newSvg(){
    document.getElementById("editor").innerHTML = firstData;
    planKey = null;
    set();
    document.getElementById("editor").innerHTML = localStorage.getItem(planKey);
    document.getElementById("titre_plan").textContent = planKey;
    init();
    initBG();

}

// donne l'option d'effacer les plans
function del() {
    let del= document.getElementsByClassName("deleteMe");
    if(localStorage.length > 0){

        for(let i = 0 ; i < del.length; i++){
            del[i].style.display = "block";
            del[i].addEventListener("click", function(){
                console.log("good morning!!!");
                $(this).closest("li").remove();
                let cle =$(this).closest("a").text().slice(0,-1);
                console.log("cle ="+ cle);
                localStorage.removeItem(cle);
            });

        }

    }
//Loop through
}


