for(let i=1;i<10;i+2){
	console.log(i); //1,3,5,7,9
}

let col = 'Blue';
let colors = ['red','green','blue']
for (let color of colors) {
	console.log(color);
}

let User = 
[
 {name:'John',age:40,country:'USA',city:'New York'},
 {name:'Jane',age:35,country:'Canada',city:'Toronto'},
 {name:'Bob',age:30,country:'UK',city:'London'}
]
for (let key in User) {
    if(key === 'country')
	  console.log(key + ':' + User[key as keyof typeof User]); 
    // name : John
    // age : 40
    // country : USA
}
const name1 = "javed";
for(const char of name1){
    console.log(char);
}
const user2 = {name:"javed",age:28};


let count =1;
while(count <= 10){
    console.log(count);
    if(count == 11)
        {break;}
    count++;
}

