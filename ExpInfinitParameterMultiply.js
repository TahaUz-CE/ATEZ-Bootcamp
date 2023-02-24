let userResult = 1;
let check = false;

function multiplyMyArguments(){
    const args = arguments;
    for(let i=0; i<args.length; i++){
        if(!isNaN(args[i])){
            userResult *= args[i];
            check = true;
        }else{
            console.log("Your " + i + ". Arguments invalid value !");
        }
    }
};

// Exp 1
multiplyMyArguments('taha','uz',1,2,3);

// Exp 2
//multiplyMyArguments('hello','taha');

// Note: Do not run two instances at the same time because of "Check" variable is broken

if(check){
    console.log("Result your calculate : " + userResult);
}else{
    console.log("Invalid Value !");
}
