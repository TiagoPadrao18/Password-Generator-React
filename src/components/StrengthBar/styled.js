import styled from "styled-components";

export const Bar = styled.p`
  border: 1px solid white;
  height: 10%;
  margin: 0.4%;
  padding: 20px 6px 20px 6px;
  background-color: ${(props) =>
 props.bg === "orange" ? "orange" : "transparent"};
`;
