import styled from "styled-components";

export const CharactCard = styled.div`
  width: 200px;
  height: 250px;
  border: ${(props) => props.borderCard};
  color: ${(props) => props.colorName};

  background-color: ${(props) => props.backgroundColor};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  img {
    width: 120px;
  }
`;
