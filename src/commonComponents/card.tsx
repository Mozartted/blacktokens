import styled from "styled-components"

const Card = styled.div<{background: string}>`
   padding: 5px;
   border: none;
   display:  block;
   flex-direction: row;
   border-radius: 3px;
   ${props => props.background ? `background: ${props.background};` : ``}
   box-shadow: -1px 2px 9px 0px rgba(0,0,0,0.19);
   transition: ease-in-out 0.3s; 
   &:hover {
      transform: scale(1.05);
  }
   &:focus {
      outline: none;
  }
`
export default Card