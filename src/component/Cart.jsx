import React, { useContext } from "react";
import { CgLaptop } from "react-icons/cg";
import CartContext from "../context/CartContext";

const Cart = () => { 
  let ctx=useContext(CartContext);
  let sum = 0;
  // console.log(ctx.cartArr)
  ctx.cartArr.map((item) => {
    sum = sum + item.price;
  });
 let arr=ctx.cartArr
//  console.log(arr)

  return (
    <div >
      { arr.length>0&&<div className="pt-6">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.no.
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, index) => {
                return (
                  <tr  key={item.id} className="bg-gray-800 border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 flex justify-center aline-items-center">
                      <img src={item.thumbnail} className="w-36 h-36" alt="" />
                    </td>
                    <td className="px-6 py-4  text-gray-100">{item.title}</td>
                    <td className="px-6 py-4  text-gray-100">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4  text-gray-100">
                      <button
                        className="bg-green-500 px-2 py-1 rounded-sm  text-gray-100"
                        onClick={() =>ctx.increment(item, index)}
                      >
                        +
                      </button>
                      {item.qty}{" "}
                      <button
                        className="bg-gray-700 px-2 py-1 rounded-sm  text-gray-100"
                        onClick={() =>ctx.decrement(item, index)}
                       >
                        -
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-red-500 px-2 py-1 text-white rounded-sm hover:bg-red-400 "
                        onClick={() =>
                          (ctx.removeItem(item,index))
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-500">
          <h1 className="text-xl text-center">
            <b>Total:&nbsp;</b>${sum.toFixed(2)}
          </h1>
        </div> 
      </div>}
      {
       arr.length===0 &&<h1 className="text-center text-2xl bg-gray-800 text-white mt-6 p-2 ">Please Add Item In Cart</h1>
      }
    </div>
  );
};

export default Cart;
