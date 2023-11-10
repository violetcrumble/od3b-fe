import styled from 'styled-components';

export const HeroStyles = styled.div`
  position: relative;
    width: 100%;
    height: 60vh;

    .imageWrapper {
    z-index: -1;
  }
  
  .heroContent {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;

    h1 {
      margin-top: 20px;
      background-color: rgba(0, 0, 0, .4);
      padding: 20px;
    }

    p {
      line-height: 150%;
    }

    .youtube-button {
      background-color: red;
      color: white;
      text-decoration: none;
      padding: 20px;
      font-weight: bold;
    }
  }
`;