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
import Signup from "./pages/Login/Signup";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UpdateTask from "./pages/Tasks/UpdateTask/UpdateTask";

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
            <Route
              path="/addtasks"
              element={
                <RequireAuth>
                  <AddTasks />
                </RequireAuth>
              }
            ></Route>

            <Route
              path="/tasks/update/:id"
              element={
                <RequireAuth>
                  <UpdateTask />
                </RequireAuth>
              }
            />

            <Route path="/products" element={<Products />}></Route>

            <Route
              path="/products/:id"
              element={
                <RequireAuth>
                  <ProductDetails />
                </RequireAuth>
              }
            ></Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
