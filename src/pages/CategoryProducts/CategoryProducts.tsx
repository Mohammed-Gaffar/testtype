import React, { useContext }  from "react";
import { AppContext } from "../../App";


export default function CategoryProducts() {
  
    const ContextValues = useContext(AppContext)

    const selectedCategory = ContextValues?.selectedCategory


    return (
    <div>
      <h1>Category Products Page X {selectedCategory}</h1>
    </div>
  );
}


