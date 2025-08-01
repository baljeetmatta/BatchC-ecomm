const allProducts=document.querySelector("#allProducts");
const loadmoreBtn=document.querySelector("#loadmoreBtn");
let start=0,count=8;
loadmoreBtn.addEventListener("click",()=>{
start+=8;
    fetchProducts(start);

})

let fetchProducts=(start)=>{

    fetch("./data/products.json")
    .then((response)=>{
        return response.json();
    }).then((products)=>{
        //console.log(products);
      products=  products.slice(start,start+8)
      console.log(start,products.length);

     if(start>products.length)
        loadmoreBtn.style.display="none";

        products.forEach((product)=>{
            addProduct(product);

        })
    })
}
let addProduct=(product)=>
{
    let mainDiv=document.createElement("div");
    mainDiv.innerHTML=`<div>
                    <img src=${product.image}/>
                    <div>${product.title}</div>
                    <div class="flex-class">
                    <div>
                        <span class="sale-price">₹${product.salePrice}</span> <span class="regular-price">₹${product.price}</span>
                    </div>
                    <div>${product.categories}</div>
                    </div>
                    <div>${product.shortDescription}</div>
                    

                </div>`;
                allProducts.append(mainDiv);


}
fetchProducts(start);
