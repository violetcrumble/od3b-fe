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
    background-color: rgba(0, 0, 0, .4);
    padding: 40px;
    top: 40px;

    h1 {
      margin-top: 20px;
      
      padding: 20px;
    }

    p {
      line-height: 150%;
      text-shadow: black 0.1em 0.1em 0.2em
    }

    .youtube-button {
      background-color: #FF0000;
      color: white;
      text-decoration: none;
      padding: 20px;
      font-weight: bold;
      text-shadow: black 0.1em 0.1em 0.2em;
    }
  }
`;