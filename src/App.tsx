import { createContext, ChangeEvent, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/Home/HomePage";
import { ContactUs } from "./pages/ContactUs/ContactUsPage";
import { Profile } from "./pages/User/Profile";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductsCategories from "./pages/ProductsCategories/ProductsCategories";
import CategoryProducts from "./pages/CategoryProducts/CategoryProducts";

export interface AppContextType {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  //==============================
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}


export const AppContext = createContext<AppContextType | undefined>(undefined);

function App() {
  const client  = new QueryClient();

  const [username, setUsername] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <>
      <div className="App">
        <QueryClientProvider client={client}>
           <AppContext.Provider value={{ username, setUsername ,selectedCategory, setSelectedCategory}}>
              <Routes>
                <Route path="/" element={<HomePage />}>
                  Home
                </Route>
                <Route path="/HomePage" element={<HomePage />}>
                  HomePage
                </Route>
                <Route path="/ContactUs" element={<ContactUs />}>
                  ContactUs
                </Route>
                <Route path="/Profile" element={<Profile />}>
                  Profile
                </Route>
                <Route path="/Products" element={<ProductsPage />}>
                  Products
                </Route>
                <Route path="/ProductsCategories" element={<ProductsCategories/>}>
                  Products Categories
                </Route>
                  <Route path="/ProductsCategories/:categoryName" element={<CategoryProducts/>}>
                  Category Products
                </Route>
              </Routes>
        </AppContext.Provider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
