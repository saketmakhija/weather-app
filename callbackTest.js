const add = (a, b, callback)=>{
    setTimeout(()=>{
        c = a+b;
        callback(c);
    }, 2000)
}

add(1, 4, (sum)=>{
    console.log('sum is '+sum)
})