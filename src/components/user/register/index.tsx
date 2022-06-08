import { useState } from "react";
import * as C from "../styles";
import { LoginSVG } from "../svg/LoginSVG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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

    const sendRegister = () => {
        fetch("http://localhost:3001/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
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
                <h1>Register</h1>
                <p>Create you account and start managing your candidates!</p>

                <C.formWrapper>
                    <C.InputWrapper>
                        <input type="text" required name="name" placeholder="Fullname" onChange={e => setUserName(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <input type="email" required name="email" placeholder="Email" onChange={e => setUserEmail(e.target.value)} />
                    </C.InputWrapper>

                    <C.InputWrapper>
                        <input type={inputType} required name="password" placeholder="Password" onChange={e => setUserPassword(e.target.value)} />
                        <C.PasswordButton onClick={handlePassword}><FontAwesomeIcon icon={showPasswordIcon} /></C.PasswordButton>
                    </C.InputWrapper>

                    <C.LoginButton onClick={sendRegister}>Register</C.LoginButton>
                </C.formWrapper>

            </C.Container>

            <LoginSVG />

        </C.Wrapper>
    )
}