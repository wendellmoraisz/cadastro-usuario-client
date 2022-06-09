import { Routes, Route } from "react-router-dom";
import { Login } from "./components/user/login";
import { Register } from "./components/user/register";
import { Home } from "./components/home";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
};