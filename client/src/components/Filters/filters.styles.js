import styled from 'styled-components';

export const FiltersWrapper = styled.section`
  padding: 20px;
  background-color: #000111;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const FiltersContainer = styled.div`
  margin-bottom: 20px;
  
`;

export const InputFilter = styled.select`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333333;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ResetBtn = styled.button`
  border: none;
  background-color: ##03A9F4;
  color: #ffffff;
  border-radius: 4px;
  padding: 12px 20px;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  min-width: 200px;
  cursor: pointer;

  &:hover {
    background-color: #03A9F4;
    transform: scale(1.05);
  }
`;

export const OrderBtn = styled.button`
  border: none;
  background-color: #00bfa5;
  color: #ffffff;
  border-radius: 4px;
  padding: 12px 20px;
  transition: all 0.3s ease-in-out;
  margin-top: 10px;
  min-width: 200px;
  cursor: pointer;

  &:hover {
    background-color: #009d85;
    transform: scale(1.05);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CheckboxLabel = styled.label`
  color: #333333;
  font-size: 14px;
  font-weight: 400;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;
