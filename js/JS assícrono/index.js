//Biblioteca Ajax
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/matheusluna');
// xhr.send(null);
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
        
//     }
// }
// Criando Promises
// var minhaPromise = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/matheusluna');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }else{
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
//     .then(function(response) {
//         alert(response.login);
        
//     })
//     .catch(function(error) {
//         alert(error)
//         console.warn(error);
        
//     });
//Utilinzando o Axios
axios.get('https://api.github.com/users/matheusluna')
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        alert(error)
        console.warn(error);
    });