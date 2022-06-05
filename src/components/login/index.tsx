import * as C from "./styles";
import { LoginSVG } from "./svg/LoginSVG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Login() {

    const [showPasswordIcon, setShowPasswordIcon] = useState(faEye);
    const [inputType, setInputType] = useState("password");
    
    const handlePassword = () => {
        if (inputType === "password" && showPasswordIcon === faEye){
            setShowPasswordIcon(faEyeSlash);
            setInputType("text");
        } else {
            setShowPasswordIcon(faEye);
            setInputType("password");
        };
    };

    return (
        <C.Wrapper>

        <C.Container>
            <h1>Sign In</h1>
            <p>Sign in and start managing your candidates!</p>
            <form action="">
                <C.InputWrapper>
                <input type="email" name="email" placeholder="Login"/>
                </C.InputWrapper>

                <C.InputWrapper>
                <input type={inputType} name="password" placeholder="Password" />
                <C.PasswordButton onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon}/></C.PasswordButton>
                </C.InputWrapper>

                <C.LoginButton type="submit">Login</C.LoginButton>
            </form>
            <a href="/register">Create Account</a>
        </C.Container>
        
            <LoginSVG/>

        </C.Wrapper>
    );
};