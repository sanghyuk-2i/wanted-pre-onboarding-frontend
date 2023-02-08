import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ size }) => (size === "md" ? "280px" : "360px")};
  min-height: 400px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  background-color: white;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: 0;
  cursor: pointer;
  background-color: white;
  height: ${({ size }) => (size === "md" ? "36px" : "28px")};
  ${({ options }) => {
    switch (options) {
      case "primary":
        return { color: "whitesmoke", backgroundColor: "#9f86c0" };
      case "secondary":
        return { color: "#9f86c0", border: "1px solid #9f86c0" };
      case "destructive":
        return { color: "whitesmoke", backgroundColor: "#ff686b" };
      case "disabled":
        return { color: "whitesmoke", backgroundColor: "lightgrey" };
      default:
        return;
    }
  }}
`;

export const CheckBox = styled.input`
  appearance: none;
  outline: none;
  border: 1px solid lightgrey;
  transition: background-color 0.15s ease;
  &:checked {
    border: 0;
    background-color: #9f86c0;
    background-image: url("checked.png");
    background-size: ${({ size }) => `${Math.ceil(size * 0.75)}px`};
    background-position: center;
    background-repeat: no-repeat;
    transition: background-color 0.15s ease;
  }
  ${({ size }) => {
    const strSize = `${size}px`;
    return {
      width: strSize,
      height: strSize,
      borderRadius: strSize,
    };
  }}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > Label {
    display: ${({ labelDisplay }) =>
      labelDisplay === false ? "none" : "block"};
    font-size: 12px;
    padding-left: 2px;
    padding-bottom: 8px;
  }
`;

export const Input = styled.input`
  height: ${({ size }) => (size === "md" ? "28px" : "24px")};
  background: inherit;
  border: 1px solid lightgray;
  box-shadow: none;
  border-radius: 8px;
  padding: 4px;
  letter-spacing: 0.75px;
  &:focus {
    transition: 0.1s ease-in;
    border: 1.5px solid #9f86c0;
  }
`;

export const Label = styled.label`
  color: black;
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;
