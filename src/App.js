import "./App.css";
import Home from "./pages/Home/Home";
import Tasks from "./pages/Tasks/Tasks";
import { Routes, Route } from "react-router-dom";
import AsideNav from "./components/AsideNav/AsideNav";
import AddTasks from "./pages/AddTasks/AddTasks";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <AsideNav />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/addtasks" element={<AddTasks />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
