"use strict";

let selectedItem;

document.addEventListener("DOMContentLoaded", function() {

    init();

});


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

    }

    drop_area.addEventListener("drop", dropElement);

    drop_area.addEventListener("dragover", function (evt) {
        console.log("Je suis in dragover");

        evt.preventDefault();

    });

    let use = $("#drop_area").find("use");
    for(let i of use){
        Draggable.create("#" + i.id, {
            type: "x,y",
            bounds: "#drop_area",
            overshootTolerance: 0,
            throwProps: true
        });

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

        Draggable.create("#" + copy.id, {
            type: "x,y",
            bounds: "#drop_area",
            overshootTolerance: 0,
            throwProps: true
        });

        update();
        selectedItem = null;
    }
}