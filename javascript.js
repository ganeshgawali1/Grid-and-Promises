

function func1(){
    return new Promise(function(resolve, reject){
     setTimeout(()=> {
            const error=true;
            if(error){
                console.log("Your Promise Has Bean Resolved");
                resolve();
            }
            else{
                console.log("Your Promise Has Not Bean Resolved");
                reject('Sorry not Done');
            }
     },4000)             
    });
}

func1().then(function(){
   console.log("Thanks for Resolve");
}).catch(function(){
    console.log("Very Bad Brother");
})