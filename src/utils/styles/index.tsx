import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  background-color: inherit;
  color: #eeeeee;
  margin: 4px 0px;
  outline: none;
  border: none;
  font-size: 24px;
`;

export const InputContainer = styled.div`
  width: 100%;
  background-color: #393e46;
  padding: 15px 16px;
  border-radius: 15px;
  margin: 7px 0 0 0;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  color: #eeeeee;
  font-size: 14px;
  font-weight: bolder;
`;

export const Button = styled.button`
  background-color: #4ecca3;
  color: #eeeeee;
  font-size: 20px;
  font-weight: bolder;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 10px 0;
  width: 100%;

  &:hover {
    background-color: #00c785;
  }
`;

export const Page = styled.div`
  height: 100%;
  background-color: #232931;
  display: flex;
  justify-content: center;
  align-items: center;
`;
