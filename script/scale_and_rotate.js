"use strict"

let s = Snap("#drop_area");
let dragging = 0;
let handleGroup;

function addHandleFunc() {

    console.log(this);

    if( dragging == 0 ) {
        dragging = 1;
        let bb = this.getBBox();
        let handle = new Array();
        handle[0] = s.circle(bb.x,bb.y,10).attr({class: 'handler'});;
        handle[1] = s.circle(bb.x+bb.width, bb.y, 10).attr({class: 'handler'});
        handleGroup = s.group(this, handle[0], handle[1]);
        handleGroup.drag(move,start,stop);
    } else {
        dragging = 0;
        s.append(this);
        handleGroup.selectAll('handler').remove();
        handleGroup.remove();
    }
}

let start = function() {
    this.data('origTransform', this.transform().local);
}

let move = function(dx,dy) {
    let scale = 1 + dx / 50;
    this.attr({
        transform: this.data('origTransform') + (this.data('origTransform') ? "S" : "s") + scale
    });
}

let stop = function() {};

let update = function () {
    s = Snap("#drop_area");
    s.selectAll("use").forEach( function( el ) {
        console.log(el);
        el.dblclick( addHandleFunc );
    });

};
