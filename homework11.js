/**
 * Created by Tidhar on 21/11/2016.
 */
// function printOrRun(param1) {
//     ...
// }

let printOrRun = (param) => {
    if (typeof param === "function") {
        //run the function
        param(17);
    } else {
        //print the param
        document.getElementById("answer").innerHTML += param + "<br>";
    }
};

let showInAlert = (somethingToAlert) => {
    alert(somethingToAlert);
};



printOrRun(22);
printOrRun("hello");
printOrRun([23, "who is it", true]);

printOrRun(showInAlert);
printOrRun(showDouble);


function showDouble (value) {
    console.log(value*2);
};




