
"use strict";
console.log("Js upload file Started");
const CSS_CLASS_ENTERED = "entered";
const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK_NS = "http://www.w3.org/1999/xlink";
document.addEventListener("DOMContentLoaded", function () {
    let svgs = document.getElementsByTagName("svg");
    console.log(svgs);
    console.assert(svgs, "You have no element with Name 'svg'");

    for (let s of svgs) {
        s.addEventListener("dragenter", function (evt) {

            evt.target.classList.add(CSS_CLASS_ENTERED);
        });
        s.addEventListener("dragleave", function (evt) {

            evt.target.classList.remove(CSS_CLASS_ENTERED);
        });
        s.addEventListener("dragover", function (evt) {

            evt.preventDefault();
        });
        s.addEventListener("drop", function (evt) {
            evt.target.classList.remove(CSS_CLASS_ENTERED);
            evt.preventDefault();
            let files = evt.dataTransfer.files;
            console.log(files);
            let myfiles = files[0];
            catch_file(evt.target, myfiles);

        });
    }

    function file_is_valid(file) {
        // Verifier que le type MIME du fichier est une image
        let result = ('image' === file.type.split('/')[0]);
        console.log(result ? 'image file accepted' : 'file refused : not image');
        return result;
    }

    function catch_file(s, file) {
        // Vérifier que la target est bien un élément SVG
        console.assert(s.tagName.toLowerCase() === "svg", "Invalid svg element");
        switch (s.id) {
            case "drop_area":
                let monImg = document.createElementNS(SVG_NS,"image");
                monImg.setAttribute("x","0");
                monImg.setAttribute("y","0");
                monImg.setAttribute("width","100%");
                monImg.setAttribute("height","700");
                monImg.setAttribute("preserveAspectRatio","null");
                monImg.setAttributeNS(XLINK_NS, "xlink:href", URL.createObjectURL(file));
                drop_area.appendChild(monImg);
                break;

            default:

        }
    }

});