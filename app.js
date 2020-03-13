var showProd = document.getElementById('showProd');
var productList = document.getElementById('productList');
var shoppingBasket = document.querySelectorAll('.fa');
var row = document.querySelectorAll('.row')[0];
var totalCost = document.getElementById('totalCost');
var basketText = document.getElementById('basketText');


var products = [{
        productImg: "img/dropbox.png",
        productTitle: "DJI Mavic 2 Zoom Drone with Smart Controller Kenko Filter Kit",
        price: 189.00,
        id: "drone"
    },
    {
        productImg: "img/dropbox.png",
        productTitle: "Something else",
        price: 10.00
    },
    {
        productImg: "img/dropbox.png",
        productTitle: "Something else",
        price: 10.00
    },
    {
        productImg: "img/dropbox.png",
        productTitle: "Something else",
        price: 10.00
    },
    {
        productImg: "img/dropbox.png",
        productTitle: "Something else",
        price: 10.00
    }
]

function addItem(index) {
    products[index]
}


products.forEach(function getProduct(item, index) {

    productList.innerHTML += `

    <div class="row">
    <div class="col-md-2 bg-secondary p-2 text-center">
                              <img src="${item.productImg}" id="productImg" class="img-responsive" alt="" srcset="">
                          </div>
                          <div class="col-md-6 bg-dark p-2 text-center">
                           
                            <span id="text-center">${item.productTitle}
                            </span>
                        </div>

                        <div class="col-md-4 bg-secondary p-2 price text-center">
                            
                            <span id="text-center align-middle">${item.price}</span>
                            <i type="button" id="item${index+1}"class="fa fa-cart-plus" aria-hidden="true"></i>
                            </div>
                            </div>

    `;





});

basketText.innerHTML = "Your Basket is <br />currently empty";

// addToCart.forEach(function x(icon,index){


//     console.log(icon)

// })

function mycreateElementFunction(tagname){
    return document.createElement(tagname)
}

var sumOfTotal;
var currentItem;
var counter = 0;
var secondBody = document.querySelectorAll("div#productList");

secondBody = addEventListener('click', testFunction);

function testFunction(e) {
    if (e.target.id = "delete") {
        
        var price = e.target.parentElement.childNodes[0].nextElementSibling.outerText;
        currentItem = price;
        
        
        
        if (counter === 0){
            sumOfTotal = Number(currentItem);
            basketText.innerHTML = "Your Basket contains :";
            console.log('First click total => '+sumOfTotal);
            totalCost.innerHTML = "Total : $"+Number(sumOfTotal);
        } if (counter > 0) {
            sumOfTotal += Number(price);
            console.log('Second or more click total => '+sumOfTotal);
            totalCost.innerHTML = "Total : $"+Number(sumOfTotal);
        }
        counter++
        
       // totalCost.innerHTML = price;




        

        
        

        var item = e.target.parentElement.parentElement.childNodes[2].nextElementSibling.outerText;
        document.getElementById('shoppingBasket').innerHTML += "<li>"+item+"</li>";
        var interval = setInterval(doStuff, 500); // 500 ms = start after 0.5sec 
function doStuff() {
  alert('Your item has been added to your basket');
  clearInterval(interval);
}

        
    }
}


/*document.querySelector('.fa').addEventListener('click', function AddToCartFunction(event) {

    document.querySelectorAll('.fa').forEach((element, index) => {


        var title = document.createElement('p')
        var text = document.createTextNode(event.target.parentElement.parentElement.childNodes[index].nextElementSibling.childNodes[index].outerText)
        title.appendChild(text)
       // shoppingBasket.appendChild(title)

        console.log(event.target.parentElement.parentElement.childNodes[2].nextElementSibling.childNodes[1].outerText)
        console.log(index)
    })

    console.log("test")



});*/
var item2 = document.getElementById('item2');
// console.log(item2);


