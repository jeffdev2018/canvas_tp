"use strict"
let firstData;
let planKey = "Create a plan to start";
let pass;
document.addEventListener("DOMContentLoaded", function() {
    init();
    firstData = document.getElementById("editor").innerHTML;

});
// sauvegarde le plan
function set() {

   /* for(let i=0; i<localStorage.length; i++){
        console.log($("#titre_plan").text());
        if($("#titre_plan").text() ===localStorage.key(i)){
            newSvg();
            break;
        }else{
            alert("Create or select a plan to save!!!")
            break;
        }

    }*/
    if(localStorage.length>0){
        let agree = confirm("Save with the same name ?");



    if(agree){
        let cle = $("#titre_plan").text();
        let data = document.getElementById("editor").innerHTML;
        localStorage.setItem(planKey, data);
        closeNav();


    }else{
        let key = prompt("Enter le nom du plan", "");
        while(key ===""){
            key = prompt("Enter a valid value", "");
        }
        if(key!== null){


            planKey = key;
            let data = document.getElementById("editor").innerHTML;
            localStorage.setItem(key, data);
            closeNav();
            let list = document.getElementById("listePlan");
            let p = document.getElementById("erreur");
            p.textContent = "";
            document.getElementById("editor").style.backgroundColor = "gray";
            document.getElementById("editor").style.border = "2px solid black";
            display(list);
            init();
            initBG();}
    }
    }



}

// cree un nouveau plan
function newSvg(){
    let key = prompt("Enter le nom du plan", "");
    let agree = true;
     pass = false;
    while(key ===""){
        key = prompt("Enter a valid value", "");
    }
    for(let i=0; i<localStorage.length; i++){
        if(key ===localStorage.key(i)){
            agree = confirm("Do you want to replace the save for "+key +" ?");
            if(agree){
                break;
            }else{
                key = prompt("Enter a valid value", "");
            }
        }

    }

    if(key!=="" && key!== null){

        document.getElementById("editor").innerHTML = firstData;
        planKey = key;
        let data = document.getElementById("editor").innerHTML;
        let svg = document.getElementById("drop_area");
        localStorage.setItem(planKey, data);
        closeNav();
        let list = document.getElementById("listePlan");
        let p = document.getElementById("erreur");
        p.textContent = "";
        document.getElementById("editor").style.backgroundColor = "gray";
        document.getElementById("editor").style.border = "2px solid black";
        display(list);
        init();
        initBG();

    }

}

// donne l'option d'effacer les plans
function del() {
    let del= document.getElementsByClassName("deleteMe");
    let accept = false;
    if(localStorage.length > 0){

        for(let i = 0 ; i < del.length; i++){
            del[i].style.display = "block";
            del[i].addEventListener("click", function(){
                console.log("good morning!!!"+ document.getElementById("titre_plan").textContent);
                $(this).closest("li").remove();
                let cle =$(this).closest("a").text().slice(0,-1);
                console.log("cle ="+ cle);
                localStorage.removeItem(cle);
                if($("#titre_plan").text() ===cle){
                    document.getElementById("editor").style.border = "none";
                    planKey = "Default";

                }
            });

        }

    }




//Loop through
}


