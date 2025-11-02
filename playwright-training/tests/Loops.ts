for(let i=1;i<10;i+2){
	console.log(i); //1,3,5,7,9
}

let colors = ['red','green','blue']
for (let color of colors) {
	console.log(color);
}

let User = 
[
 {name:'John',age:40,country:'USA'},
]
for (let key in User) {
    if(key === 'country')
	  console.log(key + ':' + User[key as keyof typeof User]); 
    // name : John
    // age : 40
    // country : USA
}

let count =1;
while(count <10){
    console.log(count);
    if(count == 6)
        {break;}
    count++;
}

