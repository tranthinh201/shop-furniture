// import React from 'react';
// import { useState } from 'react';

// function CartItem(data, handelRemoveProduct, onQuantityChange) {
//     return (
//         <>
//            {
//              data?.data?.map((item, index) => (
//                 <tr key={index}>
//                     <th><button onClick={() => handelRemoveProduct(item.id)}><i class="ri-close-fill"></i></button></th>
//                     <td>{item.productName}</td>
//                     <td>
//                         <div>
//                             <p>You clicked {props.item.quantity} times</p>
//                             <button onClick={() => setQuantity(quantity + 1)}>
//                                 Click me
//                             </button>
//                             <button onClick={() => setQuantity(quantity - 1)}>
//                                 Click me
//                             </button>
//                         </div>
//                     </td>
//                     <td>{item.price} $</td>
//                     <td>{item.price * quantity} $</td>
//                 </tr>
//             ))
//            }
//         </>
//     );
// }

// export default CartItem;