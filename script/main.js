const ul = document.getElementById('articles');

function getData(event) {
    event.preventDefault();
    const images = document.getElementById('articles').value;
    fetch(`http://www.splashbase.co/api/v1/images/search?query=laptop${items}`)

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let result = `<h2>RECOMENDADO</h2>`;
            result +=
                `<div>
                          <ul id="articles">
                              <li><img src= "${data.images_url}"/></li>
                              <li><img src= "${data.images_url}"/></li>
                              <li><img src= "${data.images_url}"/></li>
                              <li><img src= "${data.images_url}"/></li><br />
                          </ul>
                      </div>`;
            document.getElementById('result').innerHTML = result;
        });
}
