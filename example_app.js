/*
	This is a simple JS file that will be debugged using Rookout under circle-ci
*/

console.log(new Date(Date.now()).toLocaleString() +  " HelloWorld");

const animals = ["Rook",
    "Big Rook",
    "Small Rook",
	"Bird"];


function func() {
	let animal = animals[Math.floor(Math.random()*animals.length)];
	console.log(animal);
	return animal;
}

var index = 0;

setInterval(() => {
        let chosenOne = func();
    	console.log(chosenOne);

		index = index + 1;
		if (index == 5){
			process.exit(0);
		}
    }, 1500);

function sleepLoop() {
    let l = [];

    console.log("Entering sleep loop");
    setInterval(() => {
        console.log("iteration");
        let animal = animals[Math.floor(Math.random()*animals.length)];
        l.push(animal);
        const w = "dsdsd";
        let y = 9.12;
        let ploopoz = new Ploop();
        let simpleObject = new SimpleObject();
        let d = {1 : 2};
        let ping = 1;

        try {
            let x = 1.0 / 0;
        } catch (e) {
            console.error(e.stack);
        }

    }, 5000);
}
