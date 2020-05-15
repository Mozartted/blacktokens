import styled from "styled-components"
// import * as React from "react"

// const media = {
//     xs: (styles: any) => `
//         @media only screen and (max-width: 480px) {
//             ${styles}
//         }
//     `
// }
export const Grid = styled.div``;
export const Row = styled.div<{centered?: true}>`
    display: flex;
    ${props => props.centered && `justify-content: center;`}
    flex-flow: row wrap;
`;


interface IColProps {
    dataSize: number;
    dataCollapse? : string | "xs"
}
export const Col = styled.div<IColProps>`
    display: block;
    padding: 5px;
    width: 100%;
    @media only screen and (max-width: 480px) {
        width: 100%
    }
    @media only screen and (min-width: 576px) {
        width: 100%
    }
    @media only screen and (min-width: 768px) {
        width: 100%
    }
    @media only screen and (min-width: 992px) {
        width: ${
            (props) => Math.floor(100 * (props.dataSize / 12)) -1
        }%;
    }
`;

export const Container = styled.div`
    @media only screen and (min-width: 576px) {
        width: 540px;
    }
    @media only screen and (min-width: 768px) {
        width: 720px;
    }
    @media only screen and (min-width: 992px) {
        width: 960px;
    }
    @media only screen and (min-width: 1200px) {
        width: 1140px;
    }
`

export const Button = styled.button`
    padding: 10px;
    font-family: "Futura LT";
    background:  #383838;
    outline: none;
    color: #fff;
    border: 5px;
    font-size: 15px;
    margin-top: 30px;
    margin-top: 30px;
`