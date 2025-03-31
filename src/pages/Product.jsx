import React,{ useContext, useEffect, useState} from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
const Product = () => {
const {productId} = useParams();
const {products} = useContext(ShopContext);
const [productData,setProductData]= useState(false);
const [image,setImage]= useState('');

const fetchProductData = async ()=> {
   products.map((item)=>{
    if(item._id ===productId){
      setProductData(item)
      setImage(item.image[0])
      return null;
    }
})     
}
useEffect(()=>{
  fetchProductData();
},[productId],[products]);

return  productData? (
  <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
    <div className="flex gap-12 flex-col sm:flex-row">

      <div className="flex-1 flex-col-reverse gap-3 sm:flex-row">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {productData.image.map((item,index)=>(
            <img key={index} src={item} alt="" className="w-20 h-20 sm:w-24 sm:h-24 cursor-pointer hover:opacity-80" onClick={()=>setImage(item)}/>
          ))
          }
        </div>
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-auto" src={image} alt="" />
        </div>
      </div>
    </div>
 
  </div>
): <div className="opacity-0"></div>

}
export default Product;
