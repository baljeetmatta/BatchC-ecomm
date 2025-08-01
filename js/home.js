const featured=document.querySelector("#featured");
const categoryProducts=document.querySelector("#categoryProducts");


let fetchFeaturedProducts=(parent)=>{

    fetch("./data/products.json")
    .then((response)=>{
        return response.json();
    }).then((products)=>{
        //console.log(products);
  
      products=  products.filter((product)=>{
            return product.isFeatured
        })

        products=products.slice(0,4);

    
        products.forEach((product)=>{
            addProduct(product,parent);

        })
    })
}
let fetchCategoryProducts=(category,parent)=>{

    fetch("./data/products.json")
    .then((response)=>{
        return response.json();
    }).then((products)=>{
        //console.log(products);
  
      products=  products.filter((product)=>{
            return product.categories==category
        })

        products=products.slice(0,4);
        
    
        products.forEach((product)=>{
            addProduct(product,parent);

        })
    })
}
let addProduct=(product,parent)=>
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
                parent.append(mainDiv);


}


fetchFeaturedProducts(featured);
fetchCategoryProducts("Computers",categoryProducts)
