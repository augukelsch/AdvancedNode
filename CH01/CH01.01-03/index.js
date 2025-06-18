var delay = (seconds) => new Promise((resolves,rejects)=>{

    if(seconds > 3){
        rejects(new Error("Seconds too long: "+seconds));
    }

    setTimeout(()=>{
        resolves('the long delay has ended')
    },seconds*1000);
})

delay(4).then(console.log)
        .then(()=> 42)
        .then((number)=>{console.log('Hello World '+number)})
        .catch((error)=> console.log(error.message))

console.log('end first tick')

/* function hideString(str, done) {
    process.nextTick(()=>{
        done(str.replace(/[a-zA-Z]/g, 'X'));
    })
}

hideString("Hello World",(hidden)=>{
    console.log( hidden )
});

// console.log( hidden );

console.log( 'end' ) */