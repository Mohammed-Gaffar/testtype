import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductsCategoriesInterface } from "../../interfaces/productsCategoriesInterface";
import axios from "axios";
import { Header } from "../../components";

export default function ProductsCategories() {

    const {data:productsCategories = [],isLoading,error} = useQuery<ProductsCategoriesInterface[] , Error>({
        queryKey: ['categories'],
        queryFn: async () => {
           const response = await axios.get("https://dummyjson.com/products/categories");
           return response.data as ProductsCategoriesInterface[];
        }
    });

    
    if(isLoading) return <p>Loading... Data</p>
    if(error) return  <h2>{error?.message}</h2> ;

    return(
        <>
        <Header/>
            <div className="text-center">
                {isLoading && <p>Loading categories...</p>}

                {productsCategories.map((category)=>(
                    <>
                        <div className="list-item">
                            {category.name}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

