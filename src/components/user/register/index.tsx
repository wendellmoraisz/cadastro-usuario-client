import { useState } from "react";
import * as C from "../login/styles";
import { LoginSVG } from "../svg/LoginSVG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export function Register(){

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

    return(
        <C.Wrapper>

        <C.Container>
            <h1>Register</h1>
            <p>Create you account and start managing your candidates!</p>
            <form action="/" >
                <C.InputWrapper>
                <input type="text" required name="name" placeholder="Fullname"/>
                </C.InputWrapper>

                <C.InputWrapper>
                <input type="email" required name="email" placeholder="Email"/>
                </C.InputWrapper>

                <C.InputWrapper>
                <input type={inputType} required name="password" placeholder="Password" />
                <C.PasswordButton onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon}/></C.PasswordButton>
                </C.InputWrapper>

                <C.LoginButton type="submit">Register</C.LoginButton>
            </form>
        </C.Container>
        
            <LoginSVG/>

        </C.Wrapper>
    )
}