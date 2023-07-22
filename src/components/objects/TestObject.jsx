import React,{useState} from 'react';

const initialProducts=[
  {
    id:1,
    name:'Rice',
    count:2
  },
  {
    id:2,
    name:'Wheat',
    count:3
  },
  {
    id:3,
    name:'Water',
    count:4
  },
  {
    id:4,
    name:'Barley',
    count:6
  },
  {
    id:5,
    name:'Rice',
    count:2
  },
  {
    id:6,
    name:'Rice',
    count:2
  }
]


const ShoppingCart=()=>{
const [products,setProducts]=useState(initialProducts);

const handleIncreaseClick=(productId)=>{
  setProducts(products.map(product=>{
    if(product.id===productId){
      return {
        ...product,
        count:product.count+1
      }
    }else{
      return product;
    }
}))
}


return(
  <ul>
    {products.map(product=>(
      <li key={product.id}>
        {product.name}
        {' '}
        (<b>{product.count}</b>)
        {' '}
        <button type='button' onClick={()=>{
          handleIncreaseClick(product.id)
        }}>+1</button>
      </li>
    ))}
  </ul>
)

}

export default ShoppingCart;