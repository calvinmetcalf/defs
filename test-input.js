"use strict";
var x;
function named_fn(a, b) {
    let unique = 1;
    for (x = 3; x < 10; x++) {
        var i = 1;
        let y = 2;
        console.log(y);
    }
    for (let fa in [1,2,3,4,5]) {
        const y = 3;
        console.log(y);
    }
    var y,z;
}
named_fn();
