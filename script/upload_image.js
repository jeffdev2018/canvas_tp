
"use strict";
console.log("Js upload file Started");

document.addEventListener("DOMContentLoaded", initBG());

function initBG() {
    let svgs = document.getElementsByTagName("svg");
    console.log(svgs);
    console.assert(svgs, "You have no element with Name 'svg'");

    for (let s of svgs) {

        s.addEventListener("dragover", function (evt) {

            evt.preventDefault();
        });
        s.addEventListener("drop", function (evt) {
            // evt.target.classList.remove(CSS_CLASS_ENTERED);
            evt.preventDefault();

            let files = evt.dataTransfer.files;

            for(let f of files){
                catch_file(s, f);
            }

        });
    }

    function file_is_valid(file) {
        // Verifier que le type MIME du fichier est une image
        let result = ('image' === file.type.split('/')[0]);
        console.log(result ? 'image file accepted' : 'file refused : not image');
        return result;
    }

    function catch_file(s, file) {

        // valider que le fichier est bien une image
        if(file_is_valid(file)){

            // Vérifier que la target est bien un élément SVG
            console.assert(s.tagName.toLowerCase() === "svg", "Invalid svg element");

            switch (s.id) {
                case "drop_area":
                    // Ajout ou remplacement de la propritété CSS "background-image" de l'inline style de l'élément <svg>
                    if(s.style.backgroundImage === "none"){
                        s.setAttribute("style", "background-image: url(\"" + URL.createObjectURL(file) + "\");");
                    } else {
                        s.style.backgroundImage = "url(\"" + URL.createObjectURL(file) + "\")";
                    }
                    break;

                default:

            }
        }
    }

    let btn_reset = document.getElementById("effacerBG");

    btn_reset.addEventListener("click", function(evt){
        raz_drop(document.getElementById("drop_area"));

    });

    function raz_drop(s) {
        // Vérifier que s est bien un élément SVG
        console.assert(s.tagName.toLowerCase() === "svg", "Invalid svg element");

        switch (s.id) {

            case "drop_area":
                s.style.backgroundImage = "";
                break;

            default:

        }
    }

}
