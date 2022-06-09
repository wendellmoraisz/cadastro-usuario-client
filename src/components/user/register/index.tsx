import { useState } from "react";
import * as C from "../styles";
import { LoginSVG } from "../svg/LoginSVG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faAt, faUserAstronaut, faKey } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import { RestTypeNode } from "typescript";
import { ServerResponse } from "http";

export function Register() {

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

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const navigate = useNavigate();

    const sendRegister = async () => {
        if (userName == "" || userEmail == "" || userPassword == "") {
            setInvalidRegisterMessage("Por favor, preencha todos os campos :)")
            setInvalidRegisterOpacity("1");
        } else {
            const response: Response = await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    password: userPassword,
                }),
            });

            if (!response.ok) throw new Error(response.statusText);

            const data = await response.json();
            if (data.status == 200) navigate("/");
            setInvalidRegisterOpacity("1");
            setInvalidRegisterMessage("Já existe uma conta cadastrada com este email");
        }
    }

    const [invalidRegisterMessage, setInvalidRegisterMessage] = useState("");
    const [invalidRegisterOpacity, setInvalidRegisterOpacity] = useState("0");
    const InvalidLogin = styled.p`
        opacity: ${invalidRegisterOpacity};
        background: #c44d56;
        padding: 8px 20px;
        border-radius: 8px;
    `;

    return (
        <C.Wrapper>

            <C.Container>
                <h1>Criar conta</h1>
                <p>Crie sua conta e comece utilizar o App!</p>

                <C.formWrapper>
                    <C.InputWrapper>
                        <C.IconSpan><FontAwesomeIcon icon={faUserAstronaut} /></C.IconSpan>
                        <input type="text" required name="name" placeholder="Nome" onChange={e => setUserName(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <C.IconSpan><FontAwesomeIcon icon={faAt} /></C.IconSpan>
                        <input type="email" required name="email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <C.IconSpan><FontAwesomeIcon icon={faKey} /></C.IconSpan>
                        <input type={inputType} required name="password" placeholder="Senha" onChange={e => setUserPassword(e.target.value)} />
                        <C.ShowPasswordButton onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon} /></C.ShowPasswordButton>
                    </C.InputWrapper>

                    <C.LoginButton onClick={sendRegister}>Criar conta</C.LoginButton>

                </C.formWrapper>
                <InvalidLogin>{invalidRegisterMessage}</InvalidLogin>

            </C.Container>

            <LoginSVG />

        </C.Wrapper>
    )
}