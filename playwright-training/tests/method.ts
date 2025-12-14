function greet(){
    console.log("Hello World")
}

greet();

function greetUser(name:string){
    console.log(`Hello ${name}`)
    console.log(name)
}

function add(a:number,b:string):string{
    const c=a+b;
    return c;
}

let sum = add(10,"20"); //output : 1020

function showMessage(message: string, prefix?: string){
    console.log('${prefix || "Warning"}: ${message}');
}

showMessage('This is an important message','Important'); // output: Important: This is an important message
showMessage('This is an important message'); // output: Warning: This is an important message


const greeting = (): void => {
    console.log('hello world');
}
greeting();


const multiply = (a:number,b:number) : number => {
    return a*b;
}
console.log(multiply(5,6));
console.log(multiply(3,7));

const square = (num:number) => num * num;
const addition = (a:number,b:number) => {return a+b};
console.log(square(4));


function fectData() : Promise<string>{
    return new Promise((success, error) => {
        let found = false;
        setTimeout(() => {
            if(found){
            success('data fetched');
            }else{
            error('failed to fetch data');}
        }, 2000);
    });
}
    

    fectData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
    // output:

function getUserFromAPI(): Promise<{name:string,age:number}>{
    return new Promise((resolve) => {
        console.log('Fetching user from API...');
        setTimeout(()=>{
            resolve({name:"Javed",age:40});
        },2000);
    });
}

getUserFromAPI().then((user) => console.log('user: ${user.name}, Age:${user.age}}'));


async function getData(){
    console.log('fetching data...');
    const result = await fectData();
    console.log(result);
}