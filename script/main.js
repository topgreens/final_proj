const ul = document.getElementById('articles');

fetch('http://www.splashbase.co/api/v1/images/search?query=laptop') 
.then(function(response) {
  return response.json();
})
.then(function(data) {
   let articles =data.results;
   for(let i=0; i<4; i++){
       let article = articles[i];
       let li = document.createElement('li'),
       img =document.createElement('img'),
       span = document.createElement('span');
       img.src = article.picture;
       let text = article.name + " " + article.name;
       span.innerHTML = text;
       li.appendChild(img);
       li.appendChild(span);
       ul.appendChild(li);
   }
});








/*document.getElementById('getData').addEventListener('click', getData);

function getData(event) {
    event.preventDefault();
    const user = document.getElementById('articles').value;
    fetch(`http://www.splashbase.co/api/v1/images/search?query=laptop${items}`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let result = `<h2>RECOMENDADO</h2>`;
            result +=
                `<div>
                          <ul class="info">
                              <li><img src= "${data.avatar_url}"/></li>
                              <li> User id: ${data.id}</li>
                              <li> User Name: ${data.name}</li>
                              <li> User public_repos: ${data.public_repos} </li><br />
                          </ul>
                      </div>`;
            document.getElementById('result').innerHTML = result;
        });
}*/
