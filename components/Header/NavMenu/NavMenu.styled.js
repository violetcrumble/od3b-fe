import styled from 'styled-components';
import { breakpoints, themeColors } from '../../../utils/stylevars';

export const NavMenuStyles = styled.div`
  .menu {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: ${themeColors.baseColor};
  }

  .top-level-menu-item a {
    display: block;
    padding: 20px 20px;
    text-decoration: none;
    color: white;
    &:hover {
      color: ${themeColors.brandColorPrimaryLight};
    }
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .menu-icon {
    cursor: pointer;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: #fff;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #fff;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  .menu-btn {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    max-height: 710px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  .sub-menu {
    position: relative;
  }
  
  @media (min-width: ${breakpoints.md}) {
    .top-level-menu-item {
      float: left;
      margin-top: 22px;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
    .sub-menu {
      list-style: none;
      overflow: hidden;
      background-color: ${themeColors.baseColor};
      position: absolute;
      margin-left: 10px;
      padding-inline-start: 0;
      display: none;
    }
    .cocktail-recipes-top-menu {
      &:hover {
        .sub-menu {
          display: block;
        }
      }
    }
  }
`;
