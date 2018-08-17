"use strict";

let selectedItem;

document.addEventListener("DOMContentLoaded", function() {

    console.log("I am loaded");

    let elements = document.getElementsByClassName("draggable1");

    for (let e of elements) {

        console.log('Jajoute le listener a lelement : ', e);

        e.addEventListener("dblclick", function (evt) {
            console.log("Je suis in dblclick");
            console.log(evt.target);

            selectedItem = evt.target;

            if (selectedItem != undefined) {

                let tmp = new Snap(selectedItem);
                let drop_area2 = Snap("#drop_area");

                let copy = tmp.clone();
                copy.removeClass("draggable1");
                copy.addClass("draggable2");
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
        });
    }

});

