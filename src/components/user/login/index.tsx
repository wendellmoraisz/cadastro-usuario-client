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
    const sendLogin = async () => {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            }),
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();
        if (data.status == 200) {
            navigate("/home");
        } else {
            setInvalidLoginOpacity("1");
        }
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
                        <C.IconSpan><FontAwesomeIcon icon={faAt} /></C.IconSpan>
                        <input type="email" name="email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <C.IconSpan><FontAwesomeIcon icon={faKey} /></C.IconSpan>
                        <input type={inputType} name="password" placeholder="Senha" onChange={e => setUserPassword(e.target.value)} />
                        <C.ShowPasswordButton onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon} /></C.ShowPasswordButton>
                    </C.InputWrapper>

                    <C.LoginButton onClick={sendLogin}>Login</C.LoginButton>
                </C.formWrapper>
                <Link to="/register">Cadastre-se</Link>

                <InvalidLogin>Login inv??lido</InvalidLogin>
            </C.Container>

            <LoginSVG />

        </C.Wrapper>
    );
};