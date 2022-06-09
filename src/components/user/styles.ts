import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #093545;
`;

export const Container = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    width: 100vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffff;
    
    h1 {
        text-align: center;
        font-size: 4rem;
        font-weight: 300;
    }
    
    p {
        text-align: center;
        font-size: 1.3rem;
        font-weight: 200;
        margin: 0;
    }
    
    input, button{
        font-size: 1.3rem;
        padding: 10px;
        color: #ffff;
        border-radius: 8px;
    }
    
    input {
        background: transparent;
        box-sizing: border-box;
        border: 0;
        outline: 0;
        &::placeholder{
            color: #fff;
        }

        &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 40px #224957 inset;
        }
 
        &:-webkit-autofill {
        -webkit-text-fill-color: #fff;
        }
    }

    a {
        text-decoration: none;
        color: #20DF7F;
        margin: 25px 0;
    }
`;

export const formWrapper = styled.div`
    width: 320px;
    margin-bottom: 20px;
`

export const IconSpan = styled.span`
    font-size: 1.3rem;
    background: transparent;
    border: 0;
    cursor: pointer;
`;

export const LoginButton = styled.button`
    width: 100%;
    border: 0;
    background: #20DF7F;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 3px 10px 0px #000;
    }
    transition: all .3s ease;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    background: #224957;
    border-radius: 8px;
    padding: 0 8px;
    margin: 30px 0;
`;