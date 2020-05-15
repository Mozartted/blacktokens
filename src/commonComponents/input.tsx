import styled from "styled-components"

const Input = styled.input`
    height: 40px;
    width: 400px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    color: #fff;
    font-family: "Futura LT",
    outline: #4A4A4A;
    border: 0px;
    background: #4A4A4A;
    transition: ease-in-out 0.3s; 
    &:focus{
        outline: none;
    }
    &:hover {
        transform: 
        height: 60px;
        width: 420px;
    }


`
export default Input