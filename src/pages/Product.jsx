import React, { useContext, useEffect, useState } from 'react'; // Added useState
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
const Product = () => {
  const { ProductId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false); // useState is now defined

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === ProductId) {
        setProductData(item);
        console.log(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  },[ProductId]);
};

export default Product;
