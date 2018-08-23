"use strict";

let selectedItem;

document.addEventListener("DOMContentLoaded", function() {

    init();

});

function set() {

    let data = document.getElementById("editor").innerHTML;

    let key = document.getElementById("key").value;


    localStorage.setItem(key, data);
    document.getElementById("editor").innerHTML= "";
}

function get() {
    let cle = document.getElementById("key").value;
    let data= document.getElementById("editor").innerHTML = localStorage.getItem(cle);

    init();
    initBG();
}

// branche les listeners aux images et au svg d'edition
function init() {

    console.log("I am loaded");

    let elements = document.getElementsByClassName("draggable1");
    let drop_area = document.getElementById("drop_area");

    for (let e of elements) {

        console.log('Jajoute le listener a lelement : ', e);

        e.addEventListener("dragstart", function (evt) {
            console.log("Je suis in dragstart");

            let name = evt.target.name;
            selectedItem = document.getElementById(name);

           // selectedItem = evt.target;

        });

        e.addEventListener("dblclick", addElement);

    }

    drop_area.addEventListener("drop", dropElement);

    drop_area.addEventListener("dragover", function (evt) {
        console.log("Je suis in dragover");

        evt.preventDefault();

    });

    let use = $("#drop_area").find("use");
    for(let i of use){
        $(document).keypress(function(e) {

            console.log(e.which);
            if(e.which == 114) {
                TweenLite.set("#"+ i.id, {transformOrigin:"50% 50%"})
                Draggable.create("#" + i.id, {
                    type:"rotation",
                    throwProps:true
                });
            }else if(e.which == 109){
                Draggable.create("#" + i.id, {
                    type: "x,y",
                    bounds: "#drop_area",
                    overshootTolerance: 0,
                    throwProps: true
                });
            }
        });

        Draggable.create("#" + i.id, {
            type: "x,y",
            bounds: "#drop_area",
            overshootTolerance: 0,
            throwProps: true
        });

        i.addEventListener("dblclick", deleteItem);
    }

}

// appel la methode pour  creer l'element svg suite au drag and drop
function dropElement(evt){

    if (selectedItem != undefined) {

        createCopy();

        selectedItem = null;
    }
}

// appel la methode pour  creer l'element svg suite au double click sur l'objet choisi
function addElement(evt){

    let name = evt.target.name;
    selectedItem = document.getElementById(name);

    if (selectedItem != undefined) {

        createCopy();

        selectedItem = null;
    }
}

// ouvre boite de dialogue pour deleter objet selectionner
function deleteItem(evt){

    selectedItem = evt.target;

    if(confirm("Voulez-vous supprimer l'item?!")){

        selectedItem.remove();

    }

    selectedItem = null;
}

// cree une copy de l'objet selectionner pour le mettre dans la zone d'edition
function createCopy(){

    let tmp = new Snap(selectedItem);
    let drop_area2 = Snap("#drop_area");

    let dim = event.target.getBoundingClientRect();
    let x = (window.event.clientX - dim.left - (selectedItem.getBBox().width / 2));
    let y = (window.event.clientY - dim.top - (selectedItem.getBBox().height / 2));

    let copy = tmp.clone();
    copy.addClass("draggable2");
    copy.attr({ x: x, y: y});

    drop_area2.append(copy);

    copy.dblclick(deleteItem);

    $(document).keypress(function(e) {

        console.log(e.which);
        if(e.which == 114) {
            TweenLite.set("#" + copy.id, {transformOrigin:"50% 50%"})
            Draggable.create("#" + copy.id, {
                type:"rotation",
                throwProps:true
            });
        }else if(e.which == 109){
            Draggable.create("#" + copy.id, {
                type: "x,y",
                bounds: "#drop_area",
                overshootTolerance: 0,
                throwProps: true
            });
        }
    });

    Draggable.create("#" + copy.id, {
        type: "x,y",
        bounds: "#drop_area",
        overshootTolerance: 0,
        throwProps: true
    });

}