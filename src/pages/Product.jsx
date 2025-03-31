import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const Product = () => {
  const { productId } = useParams();
  const { products,currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(null);

  useEffect(() => {
    const fetchProductData = () => {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image ? foundProduct.image[0] : ""); // Prevent errors
      }
    };

    fetchProductData();
  }, [productId, products]); // ✅ Correct dependency array

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image &&
              productData.image.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt=""
                  className="w-20 h-20 sm:w-24 sm:h-24 cursor-pointer hover:opacity-80"
                  onClick={() => setImage(item)}
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt=""  className="w-3 5"/>
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium ">{currency} {productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
             <div  className="flex flex-col gap-4 my-8">
                <p> Select Size </p>
                <div className="flex gap-2">
                  {productData.size.map((item, index) => (
                    <button onClick={()=>setSize(item)}  className={`border py-2 px-4 bg-gray-100 ${item=== size ? 'border-orange-500':''}`} key={index} >{item}</button>
                  ))}
                </div>
             </div>
             <button className="bg-black text-white  text-sm active:bg-gray-700">Add To Cart</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
