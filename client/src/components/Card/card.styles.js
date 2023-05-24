import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px) translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.2px);
  -webkit-backdrop-filter: blur(9.2px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 20px;
  max-width: 300px;
  overflow: hidden;
  animation: ${fadeInAnimation} 1s cubic-bezier(.25, 1, .30, 1) both;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #969696;
    }
  }
`;

export const ImageContainer = styled.figure`
max-height: 300px;
display: flex;
padding: 0;
margin: 0;
position: relative;
`;

export const CardImage = styled.img`
  heigth: 100%;
  height: auto;
  object-fit: cover;
`;

export const CaptionImg = styled.figcaption`
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  display: flex;
  gap: 5px;
  color: #fff;
  font-size: 14px;
`;

export const CardContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;

  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
    color: #fff;
  }
`;

export const CardContentGenres = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  font-size: 14px;

  span:not(:first-child)::before {
    content: "|";
    margin-right: 5px;
  }
`;

export const CardContentStores = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;

  span {
    width: 16%;
  }
`;
