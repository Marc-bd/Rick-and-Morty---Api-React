import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    
}

ul, li, ol {
    list-style: none
}

button{
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
}




`;

export const ButtonPage = styled.button`
  width: 5rem;
  height: 2.5rem;
  background-color: #ffffff;
  color: #767676;
  border: 1px solid #767676;
  align-items: center;

  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;

        border: 2px solid gray;
        background: #cecece;
        opacity: 0.6;
      `;
    } else {
      return css`
        cursor: pointer;

        &:hover {
          background: rgb(246, 248, 250);
        }
      `;
    }
  }}
`;

export const HeaderPage = styled.h1`
  text-align: center;
  margin: 3rem;
`;
