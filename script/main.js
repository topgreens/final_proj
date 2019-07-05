const productImg1 = document.getElementById('ft-image1');
const productImg2 = document.getElementById('ft-image2');
const productImg3 = document.getElementById('ft-image3');
const productImg4 = document.getElementById('ft-image4');

function getData (){
    fetch(`http://www.splashbase.co/api/v1/images/search?query=laptop`)

        .then((response) => {
            return response.json()
        })
        .then(data => {         
        console.log(data); 
        productImg1.src= data.images[0].url;
        productImg2.src= data.images[1].url;
        productImg3.src= data.images[2].url;
        productImg4.src= data.images[3].url;
        });
}
getData();