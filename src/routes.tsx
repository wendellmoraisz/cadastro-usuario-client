import { Routes, Route } from "react-router-dom";
import { Login } from "./components/user/login";
import { Register } from "./components/user/register";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />}></Route>
        </Routes>
    );
};