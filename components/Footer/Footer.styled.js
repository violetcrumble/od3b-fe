import styled from 'styled-components';
import { themeColors,  breakpoints } from '../../utils/stylevars';

export const FooterStyles = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;

  .footer-grid-main {
      
      .footer-nav {
        ul {
          list-style-type: none;

          li {
            margin-bottom: 10px;

            a {
              color: ${themeColors.brandColorPrimaryLight};
            }
          }
        }
      }

      .footer-nav {
        border-bottom: solid 1px ${themeColors.grayDarker};
        padding: 10px 0;
      }

      .logo {
        display: block;
        width: 100px;
        padding: 10px 20px;
        margin: 0 auto;

        svg {
          width: 100%;
          height: 100%;
        }
      }
    }

    .footer-social-copy {
      text-align: center;
    }

    @media (min-width: ${breakpoints.md}) {
    
      .footer-grid-main {
        display: flex;

        .footer-nav {
          border-bottom: 0;
          padding: 0;
        }
      }
      
      .footer-social-copy {
        display: flex;
        justify-content: space-between;
      }
    }

`;
