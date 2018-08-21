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

function init() {

    console.log("I am loaded");

    let elements = document.getElementsByClassName("draggable1");
    let drop_area = document.getElementById("drop_area");

    for (let e of elements) {

        console.log('Jajoute le listener a lelement : ', e);

        e.addEventListener("dragstart", function (evt) {
            console.log("Je suis in dragstart");

            selectedItem = evt.target;

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

        $("#" + i.id).keypress(function(ev){

            console.log("key press");

            if(ev.altKey){
                console.log("je suis cliquer",ev.id);

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


function dropElement(evt){
    console.log("Je suis in drop");
    console.log(evt.target);

    // selectedItem = evt.target;

    if (selectedItem != undefined) {

        let tmp = new Snap(selectedItem);
        let drop_area2 = Snap("#drop_area");

        let copy = tmp.clone();
        copy.removeClass("draggable1");
        copy.addClass("draggable2");

        let dim = event.target.getBoundingClientRect();
        let x = (window.event.clientX - dim.left - (selectedItem.getBBox().width / 2));
        let y = (window.event.clientY - dim.top - (selectedItem.getBBox().height / 2));
        copy.attr({ x: x, y: y})

        console.log(event.x, event.y);
        console.log("X : " + window.event.clientX, "Y : " + window.event.clientY);

        drop_area2.append(copy);

        console.log(copy.id);

        copy.dblclick( deleteItem);

        $(document).keypress(function(e) {

            console.log(e.which);
            if(e.which == 114) {
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

        $("#" + copy.id).keypress(function(ev){

            console.log("key press");

            if(ev.altKey){
                console.log("je suis cliquer",ev.id);

            }

        });

        Draggable.create("#" + copy.id, {
            type: "x,y",
            bounds: "#drop_area",
            overshootTolerance: 0,
            throwProps: true
        });

        selectedItem = null;
    }
}

function addElement(evt){
    console.log("Je suis in dblclick");
    console.log(evt.target);

    selectedItem = evt.target;

    if (selectedItem != undefined) {

        let tmp = new Snap(selectedItem);
        let drop_area2 = Snap("#drop_area");

        let copy = tmp.clone();
        copy.removeClass("draggable1");
        copy.addClass("draggable2");
        copy.attr({ x: 0, y: 0})
        drop_area2.append(copy);

        console.log(copy.id);

        copy.dblclick( deleteItem);

        $(document).keypress(function(e) {

            console.log(e.which);
            if(e.which == 114) {
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

        $("#" + copy.id).keypress(function(ev){

            console.log("key press");

            if(ev.altKey){
                console.log("je suis cliquer",ev.id);

            }

        });

        Draggable.create("#" + copy.id, {
            type: "x,y",
            bounds: "#drop_area",
            overshootTolerance: 0,
            throwProps: true
        });

        selectedItem = null;
    }
}

function deleteItem(evt){

    selectedItem = evt.target;

    if(confirm("Voulez-vous supprimer l'item?!")){

        selectedItem.remove();

    }

    selectedItem = null;
}

