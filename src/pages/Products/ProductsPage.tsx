import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components";
import { AppContext } from "../../App";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../interfaces/productsinterface";

export default function ProductsPage() {  
  const context = useContext(AppContext);
  if (!context)
      throw new Error("ProductsPage must be used inside AppContext.Provider");


  const {username} = context;

  //============= using useeffect ====================================================

    // const [products, setProducts] = useState<any[]>([]);
    // const [isLoading, setLoading] = useState(true);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //   fetch("https://dummyjson.com/products")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setProducts(data.products);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       setError('err.message');
    //       setLoading(false);
    //     });
    // }, []);

    
    // if (isLoading) return <p>Loading products...</p>;
    // if (error) return <p>{error?.message }</p>;

  //============= using useeffect ====================================================





  //============= using usequery ====================================================
    const { data: products = [], isLoading, error } = useQuery<Product[], Error>({
      queryKey: ["products"],
      queryFn: async () => {
        const res = await axios.get("https://dummyjson.com/products");
        return res.data.products as Product[];
      }
    });

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>{error?.message }</p>;
  //end. 


  
  return (
    <div style={{ padding: "" }}>
            <Header/>

      <h2>Products</h2>
        <div className="text-center">
          <label className="form-control">{username}</label>
        </div>
      <div className="b-50" style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#fff"
            }}
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              style={{ width: "100%", borderRadius: "8px" }} 
            />

            <h3>{product.title}</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>{product.description}</p>

            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>

            <p style={{ marginTop: "10px", fontSize: "13px", color: "#777" }}>
              <strong>Stock:</strong> {product.stock} — {product.availabilityStatus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function usequery() {
  throw new Error("Function not implemented.");
}
