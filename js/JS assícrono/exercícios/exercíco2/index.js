var listResult = document.querySelector('.resultado');
var listElemente = document.createElement('ul');
var minhaPromise = function(usuario) {
    var elementoDaLista = document.createElement('li');
    var titulo = document.createTextNode('Carregando...');
    elementoDaLista.appendChild(titulo);
    listElemente.appendChild(elementoDaLista);
    listResult.appendChild(listElemente);
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+usuario+'/repos');
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}
function busca() {
    var usuario = document.getElementById('usuario').value;
    document.getElementById('usuario').value = '';
    listElemente.innerHTML = ''
    minhaPromise(usuario)
    .then(function(response) {
        console.log(response);
        listElemente.innerHTML = '';
        response.forEach(element => {
            var elementoDaLista = document.createElement('li');
            var titulo = document.createTextNode(element.name);
            elementoDaLista.appendChild(titulo);
            listElemente.appendChild(elementoDaLista);
        });
        listResult.appendChild(listElemente);
        
        
        
    })
    .catch(function(error) {
        alert(error);
    })

}
