import React from 'react'
import CartContext from './CartContext'
const CartState = (props) => {
  
  const [cartArr, setCart] = React.useState([])
  // console.log(cartArr)
  function addItem(item,id){
  //  console.log(item)
   item.qty=1
   let find = cartArr.find((i)=>i.id===item.id)
   if(find){
    alert("Item already in cart")
   }
   else{
    setCart([...cartArr,item])
   }
  }
  function increment(item,id){
    let updatedObj = {
      ...item,
      qty:item.qty+1,
      price:item.price+item.price/item.qty
    }
    let copyArr = [...cartArr]
    console.log(updatedObj)
    copyArr[id] = updatedObj
    console.log(copyArr)
    setCart(copyArr)
  }
  let decrement = (item, index) => {
    let updatedObj = {
      ...item,
      qty: item.qty > 1 ? item.qty - 1 : item.qty,
      price: item.qty > 1 ? item.price - (item.price / item.qty) : item.price,
    }
    let copyArr = [...cartArr]
    copyArr[index] = updatedObj
    setCart(copyArr)
  }
  function removeItem(item,id){
   console.log("remove")
  //  setCart([...cartArr.slice(0,id),...cartArr.slice(id+1)])
  
  setCart(cartArr.filter((i)=>i.id!==item.id))
  }
  
  return (
    <CartContext.Provider value={{cartArr,addItem,removeItem,increment,decrement}}>
      {
        props.children
      }
      
    </CartContext.Provider>
  )
}

export default CartState
