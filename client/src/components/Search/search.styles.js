import styled from 'styled-components';

export const SearchBar = styled.form`
  height: 48px;
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  border-radius: 24px;
  transition: background-color 0.3s ease-in-out;
  background-color: #f2f2f2;
  overflow: hidden;
`;

export const SearchBarInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  padding: 0 16px;
  color: #333333;
  outline: none;

  &::placeholder {
    color: #777777;
  }
`;

export const SearchSubmit = styled.button`
  border: none;
  background-color: #00bcd4;
  border-radius: 24px;
  padding: 12px 24px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
  }
`;
