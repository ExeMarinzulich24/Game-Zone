import styled, { keyframes } from 'styled-components'

export const DetailWrapper = styled.section`
  padding: 50px;
  scroll-behavior: smooth;
  background-color: rgba(16, 18, 27, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 50;
  }
`;

export const DetailGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  animation: ${FadeIn} 6s cubic-bezier(0.5, 0, 0, 1) both;
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  align-items: center;
`;



const SlideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  animation: ${SlideUp} 0.5s ease-in-out both;

  h1,
  p,
  span {
    margin: 0;
    color: #fff;
    
  }

  h1 {
    font-size: 2.5rem;
    border-bottom: 2px solid #fff; /* Estilo adicional */
    padding-bottom: 5px; /* Estilo adicional */
  }

  p {
    text-align: left;
    
  }
`;


export const ContentData = styled.div`
  display: flex;
  gap: 150px;
  align-self: center;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  span {
    color: #fff;
  }
`;

export const Feature = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 20px;
`;

export const Trailers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  gap: 30px;

  video {
    width: 100%;
    height: 100%;
  }
`;
