import styled from "styled-components";

export const PasswordComp = styled.div`
  width: 36%;
  background-color: rgb(52, 52, 52);
  height: 10%;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Card = styled.div`
  width: 36%;
  background-color: rgb(52, 52, 52);
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Password = styled.p`
  color: white;
`;

export const Lenght = styled.p`
  color: white;
  margin-left: 1rem;
`;

export const Slider = styled.input`
  width: 80%;
  margin-right: 12px;
  margin-left: 1rem;
`;

export const RangeValues = styled.div`
  display: flex;
  align-items: center;
`;

export const RangeValue = styled.p`
  color: rgb(120, 216, 120);
  padding: 1rem;
  font-weight: 600;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const CheckboxMenu = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
`;

export const CheckBox = styled.input``;

export const Label = styled.label`
  padding: 1rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
`;

export const GenerateButton = styled.input`
  padding: 1rem;
  width: 90%;
  background-color: rgb(120, 216, 120);
  border: 1px solid transparent;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  margin-left: 1rem;
  &:hover {
    background-color: lightgreen;
  }
  background-color: rgb(120, 216, 120);
`;

export const StrenghtValue = styled.p`
  color: white;
`;
