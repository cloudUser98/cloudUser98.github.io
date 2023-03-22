//tests

console.log("JAVASCRIPT TESTS")

const map = new Map

map.set("key1", "value")

const object = {"key1": "value"}

console.log(map, object)

function printHello(callback) {
	for(let i = 0; i <= 5; i++) {
		callback()
	}
}

printHello(callBack = () => console.log("HELLO"))

class Logs {

	log;

	constructor(data) {
		this.log = data;
	}

	addUser = (user) => {
		this.log = user + " has logged: " + this.log
	}

	print = () => {
		console.log(this.log)
	}
}

const log = new Logs("This data is from 2023-03-21");

console.log(log.print)
console.log(log.print())
log.addUser("ESTEBAN")
console.log(log.print())

console.log(typeof log)

function type(value) {
	if (value === null) {
		return "null";
	}
	const baseType = typeof value;
	// Primitive types
	if (!["object", "function"].includes(baseType)) {
		return baseType;
	}

	// Symbol.toStringTag often specifies the "display name" of the
	// object's class. It's used in Object.prototype.toString().
	const tag = value[Symbol.toStringTag];
	if (typeof tag === "string") {
		return tag;
	}

	// If it's a function whose source code starts with the "class" keyword
	if (
		baseType === "function" &&
		Function.prototype.toString.call(value).startsWith("class")
	) {
		return "class";
	}

	// The name of the constructor; for example `Array`, `GeneratorFunction`,
	// `Number`, `String`, `Boolean` or `MyCustomClass`
	const className = value.constructor.name;
	if (typeof className === "string" && className !== "") {
		return className;
	}

	// At this point there's no robust way to get the type of value,
	// so we use the base implementation.
	return baseType;
}

console.log(type(log))
