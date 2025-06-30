function sum(a,b,call){
    let r=a+b;
    call(r)
}

function display(r){
    console.log(r);
    
}

sum(2,3,display)