import * as C from "../styles";
import { LoginSVG } from "../svg/LoginSVG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {

    const [showPasswordIcon, setShowPasswordIcon] = useState(faEye);
    const [inputType, setInputType] = useState("password");

    const handlePassword = () => {
        if (inputType === "password" && showPasswordIcon === faEye) {
            setShowPasswordIcon(faEyeSlash);
            setInputType("text");
        } else {
            setShowPasswordIcon(faEye);
            setInputType("password");
        };
    };

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const sendLogin = () => {
        fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            }),
        })
            .then(res => {
                console.log(res);
            })
            .catch(e => console.log(e));
    }

    return (
        <C.Wrapper>

            <C.Container>
                <h1>Sign In</h1>
                <p>Sign in and start managing your candidates!</p>
                <C.formWrapper>
                    <C.InputWrapper>
                        <input type="email" name="email" placeholder="Login" onChange={e => setUserEmail(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <input type={inputType} name="password" placeholder="Password" onChange={e => setUserPassword(e.target.value)} />
                        <C.PasswordButton onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon} /></C.PasswordButton>
                    </C.InputWrapper>

                    <C.LoginButton onClick={sendLogin}>Login</C.LoginButton>
                </C.formWrapper>
                <Link to="/register">Create Account</Link>
            </C.Container>

            <LoginSVG/>

        </C.Wrapper>
    );
};