console.log(new Date(Date.now()).toLocaleString() +  " HelloWorld");

const animals = ["Rook",
    "Big Rook",
    "Small Rook"];
	
function func() {
	let animal = animals[Math.floor(Math.random()*animals.length)];
	console.log(animal);
}

var index = 0;

setInterval(() => {
        func();
		
		index = index + 1;
		if (index == 5){
			process.exit(0);
		}
    }, 1500);