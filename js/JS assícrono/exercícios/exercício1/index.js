var checarIdade = function(idade) {
    return new Promise(function(resolve, reject) {
        if (idade >= 18) {
            setTimeout(() => {
                resolve(true);
            }, 2000);
            
        }else{
            setTimeout(() => {
                reject(false);
            }, 2000);
            
        }
    })
};

checarIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });
