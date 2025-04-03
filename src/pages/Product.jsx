import React, { useState ,useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

  const fetchProductData = async ()=>{
         products.map((item)=>{
          if(item._id === productId){
            setProductData(item);
            console.log(item)
            return null ;
          }
         })
  }
  useEffect(()=>{
   fetchProductData();
  })
  return(
    <div>
        <h1 className="bg-black text-white">
          this is piv natan 
        </h1>
    </div>
  )
}
export default Product;