import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Tasks from "./pages/Tasks/Tasks";
import { Routes, Route } from "react-router-dom";
import AsideNav from "./components/AsideNav/AsideNav";
import DemoHeader from "./components/DemoHeader/DemoHeader";
import AddTasks from "./pages/AddTasks/AddTasks";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <AsideNav />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/tasks" element={<Tasks />}></Route>
            <Route path="/addtasks" element={<AddTasks />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
