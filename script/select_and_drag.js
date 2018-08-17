"use strict";

let selectedItem;

document.addEventListener("DOMContentLoaded", function() {

    console.log("I am loaded");

    let elements = document.getElementsByClassName("draggable1");

    for(let e of elements) {

        console.log('Jajoute le listener a lelement : ', e);

        e.addEventListener("dblclick", function (evt) {
            console.log("Je suis in dblclick");
            console.log(evt.target);

            selectedItem = evt.target;

            if(selectedItem != undefined) {

                let tmp = new Snap(selectedItem);
                let drop_area2 = Snap("#drop_area");

                let newUse = tmp.clone();
                newUse.removeClass("draggable1");
                newUse.addClass("draggable2");
                drop_area2.append(newUse);

                callElements();

                selectedItem = null;
            }
        });
    }
});

function callElements(){

    let dragElements = document.getElementsByClassName("draggable2");

    for(let e of dragElements){
        console.log(e);
        e.draggable = false;
        makeDraggable(e);
    }

    let selectedElement, offset;

    function makeDraggable(e) {
        console.log("I AM IN");

        e.addEventListener('mousedown', startDrag);
        e.addEventListener('mousemove', drag);
        e.addEventListener('mouseup', endDrag);
        e.addEventListener('mouseleave', endDrag);

        function startDrag(evt) {
            if (evt.target.classList.contains('draggable2')) {
                selectedElement = evt.target;

                offset = getMousePosition(evt);
                offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
                offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));
            }
        }

        function drag(evt) {
            if (selectedElement) {
                evt.preventDefault();
                let coord = getMousePosition(evt);
                selectedElement.setAttributeNS(null, "x", coord.x - offset.x);
                selectedElement.setAttributeNS(null, "y", coord.y - offset.y);
            }
        }

        function endDrag(evt) {
            selectedElement = null;
        }

        function getMousePosition(evt) {
            let CTM = svg.getScreenCTM();
            return {
                x: (evt.clientX - CTM.e) / CTM.a,
                y: (evt.clientY - CTM.f) / CTM.d
            };
        }

    }
};





