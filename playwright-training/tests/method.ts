function greet(){
    console.log("Hello World")
}

greet();

function greetUser(name:string){
    console.log(`Hello ${name}`)
}

function add(a:number,b:number):number{
    return a+b;
}

let sum = add(10,20);

function showMessage(message: string, prefix?: string){
    console.log('${prefix || "Note"}: ${message}');
}