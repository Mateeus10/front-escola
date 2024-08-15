import styled from 'styled-components';


export const Image = styled.img`
  position: fixed; /* Fixa a imagem na viewport */
  top: 0; /* Alinha a imagem ao topo */
  left: 0; /* Alinha a imagem à esquerda */
  width: 100vw; /* Ocupa 100% da largura da viewport */
  height: 100vh; /* Ocupa 100% da altura da viewport */
  object-fit: cover; /* Garante que a imagem cubra todo o espaço sem distorcer */
  z-index: -1; /* Coloca a imagem atrás de outros conteúdos */
`;
