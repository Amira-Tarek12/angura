var ProductNameInput = document.getElementById('productName');
var ProductPriceInput = document.getElementById('productPrice');
var produtCategoryInput = document.getElementById('produtCategory');
var productDescInput = document.getElementById('productDesc');
var mainBtn=document.getElementById('mainBtn');

var ProductContainer;

if( localStorage.getItem('product')== null)
 {
  ProductContainer =[];
 }
 else
 {
   ProductContainer =  JSON.parse(localStorage.getItem('product'));
   DisplayProduct(ProductContainer);
 }


function AddProduct()
{
 var product=
  {
    name:ProductNameInput.value,
    price:ProductPriceInput.value,
    category:produtCategoryInput.value,
    description:productDescInput.value
  }

  ProductContainer.push(product);
  console.log(ProductContainer);
  localStorage.getItem('product',JSON.stringify(ProductContainer));

  DisplayProduct(ProductContainer);
  clearform()
  
}

function clearform()
{
  ProductNameInput.value ="";
  ProductPriceInput.value ="";
  produtCategoryInput.value ="";
  productDescInput.value ="";

}



function DisplayProduct(ProductList)
{
   var cartona=``;

   for(var i=0; i < ProductList.length; i++)
   {
     cartona+=
     `
     
     <tr>
     <td>${i}</td>
     <td>${ProductList[i].name}</td>
     <td>${ProductList[i].price}</td>
     <td>${ProductList[i].category}</td>                    
     <td>${ProductList[i].description}</td>
     <td> <button  onclick="updateProduct(${i})" class="btn btn-warning">Update</button>  </td>
     <td> <button onclick="DeleteProduct(${i})" class="btn btn-danger">Delete</button>  </td>

     </tr>`
   }

   document.getElementById('tableRow').innerHTML= cartona;

}




 
function DeleteProduct(productIndex)
{
  ProductContainer.splice(productIndex,1);
  localStorage.getItem('product',JSON.stringify(ProductContainer));

  DisplayProduct(ProductContainer)
}

function SearchProduct(term)
{
  var SearchProduct =[];
  for(var i=0 ; i< ProductContainer.length ;i++)
  {
    if((ProductContainer[i].toLowerCase().includes(term.toLowerCase())) == true)
    {
      SearchProduct.push(ProductContainer[i]) ;
    }

  }
  DisplayProduct(SearchProduct);
}
 

function updateProduct(index)
{
  ProductNameInput.value= ProductContainer[index].name;
  ProductPriceInput.value= ProductContainer[index].price;
  produtCategoryInput.value=ProductContainer[index].category;
  productDescInput.value= ProductContainer[index].description;
  mainBtn.innerHTML="update product";
}



















 

 
