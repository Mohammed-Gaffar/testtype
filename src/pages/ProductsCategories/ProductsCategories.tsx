import React, { ChangeEvent, MouseEvent, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductsCategoriesInterface } from "../../interfaces/productsCategoriesInterface";
import axios from "axios";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";


export default function ProductsCategories() {

  const  Contextvalues = useContext(AppContext)

  const {
    data: productsCategories = [],
    isLoading,
    error,
  } = useQuery<ProductsCategoriesInterface[], Error>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      return response.data as ProductsCategoriesInterface[];
    },
  });

  const setcategory = (e: MouseEvent<HTMLAnchorElement>) => {
    const category = e.currentTarget.getAttribute("data-category");
    Contextvalues?.setSelectedCategory(category || "");
    
    console.log("Selected Category:", category);
  };

  return (
    <>
      <Header />

      <div className="container mt-5">
        {/* Page Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">Product Categories</h2>
          <p className="text-muted">
            Browse all available product categories
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="alert alert-info text-center py-3">
            Loading categories...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="alert alert-danger text-center py-3">
            {error.message}
          </div>
        )}

        {/* Categories Cards Grid */}
        {!isLoading && !error && (
          <div className="row g-4">
            {productsCategories.map((category, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body text-center d-flex flex-column justify-content-between">

                    <h5 className="card-title text-capitalize fw-semibold">
                      {category.name}
                    </h5>

                    <p className="text-muted small">
                      Explore products in this category
                    </p>
                    
                    <Link
                      data-category={category.name}
                      onClick={(e) => setcategory(e)}
                      to={`/ProductsCategories/${category.name}`}
                      className="btn btn-primary mt-3"
                    >
                      View Products
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
