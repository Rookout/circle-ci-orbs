console.log(new Date(Date.now()).toLocaleString() +  " HelloWorld");

const animals = ["Rook",
    "Big Rook",
    "Small Rook"];

function func() {
	let animal = animals[Math.floor(Math.random()*animals.length)];
	console.log(animal);
}

var index = 0;
var id = 0;
id = setInterval(() => {
        func();

		index = index + 1;
		if (index === 7) {
            clearInterval(id);
        }
    }, 1000);
