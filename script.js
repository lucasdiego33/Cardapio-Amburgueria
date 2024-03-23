const list = document.querySelector("ul")
const button = document.querySelector(".mostrarTudo")
const buton2 = document.querySelector(".clicar")
const button3 = document.querySelector(".somarTudo")
const totalElement = document.getElementById("totals")
const parteFinal = document.querySelector(".filtroFinal")






 

function show(produtosArray){

  let minhaLista = ""
  produtosArray.forEach((products) => {
        minhaLista +=   `
          
          <li>                                    
              <img src=${products.src}>
              <p>${products.name}</p>
              <p> <span>R$ ${formatValues(products.price)}</span></p>
          </li> 
          
          `
          
       })
       list.innerHTML = minhaLista

}

 function clickItens (){
 const novoPreco =  menuOptions.map((products) => ({
      name: products.name,
      price: products.price * 0.9,
      vegan: products.vegan,
      src: products.src,

 }))
 show(novoPreco)
 
 }
 
function somatotal(){
  const total = menuOptions.reduce((ab, cd) => ab + cd.price, 0 );
  list.innerHTML =  `
          
  <li>                                    
      
      <p> o valor total dos itens é ${formatValues(total)}</p>
  </li> 
  
  `
 
}


function find(){
     const veganos =  menuOptions.filter((produtos) => produtos.vegan === true)
     show(veganos)

}

function formatValues (valor){
  const novoValor = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
  return novoValor
}





button.addEventListener("click", () => show  (menuOptions));
buton2.addEventListener("click", clickItens);
button3.addEventListener("click", somatotal);
parteFinal.addEventListener("click", find)
