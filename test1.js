console.log(new Date(Date.now()).toLocaleString() +  " HelloWorld");

console.log(process.argv);

const animals = ["Aardvark",
    "Abyssinian",
    "Affenpinscher",
    "Akbash",
    "Zebu",
    "Zonkey",
    "Zorseqdwewqeqweqweqweqw"];
	
function a() {
	let animal = animals[Math.floor(Math.random()*animals.length)];
	console.log(animal);
}

var index = 0;

setInterval(() => {
        console.log(new Date(Date.now()).toLocaleString() + " iteration");
		a();
		
		index = index + 1;
		if (index == 10){
			process.exit(0);
		}
    }, 5000);