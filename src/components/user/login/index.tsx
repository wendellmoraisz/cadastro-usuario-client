import * as C from "../styles";
import { LoginSVG } from "../svg/LoginSVG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faKey, faAt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    
    const navigate = useNavigate();
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
            .then(res => res.json())
            .then(res => {
                if (res.status == 200) {
                    navigate("/home");
                } else {
                    setInvalidLoginOpacity("1");
                }
            })
            .catch(e => console.log(e));
    }

    const [invalidLoginOpacity, setInvalidLoginOpacity] = useState("0");
    const InvalidLogin = styled.p`
        opacity: ${invalidLoginOpacity};
        background: #c44d56;
        padding: 8px 20px;
        border-radius: 8px;
    `;

    return (
        <C.Wrapper>

            <C.Container>
                <h1>Login</h1>
                <p>Entre e tenha acesso exclusivo ao App!</p>
                <C.formWrapper>
                    <C.InputWrapper>
                        <C.IconSpan><FontAwesomeIcon icon={faAt}/></C.IconSpan>
                        <input type="email" name="email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <C.IconSpan><FontAwesomeIcon icon={faKey}/></C.IconSpan>
                        <input type={inputType} name="password" placeholder="Senha" onChange={e => setUserPassword(e.target.value)} />
                        <C.IconSpan onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon} /></C.IconSpan>
                    </C.InputWrapper>

                    <C.LoginButton onClick={sendLogin}>Login</C.LoginButton>
                </C.formWrapper>
                <Link to="/register">Cadastre-se</Link>

                <InvalidLogin>Login inválido</InvalidLogin>
            </C.Container>

            <LoginSVG />

        </C.Wrapper>
    );
};