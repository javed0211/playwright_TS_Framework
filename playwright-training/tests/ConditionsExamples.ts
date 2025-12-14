let num = 20;
if (num > 15) {
    console.log("Number is greater than 15");
}
else if(num == 15){
    console.log("Number is equal to 15")
}else{
    console.log("Number is less than or equal to 15")
}

let browser = "firefox";
switch(browser){
    case 'chrome':
        console.log('Launch chrome');
        break;
    case 'firefox':
        console.log('Launch firefox');
        break;
    case 'safari':
        console.log('Launch safari');
            break;
    default:
        console.log('Browser not supported');
}