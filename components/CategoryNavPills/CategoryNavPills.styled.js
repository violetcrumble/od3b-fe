import styled from 'styled-components';
import { themeColors } from '../../utils/stylevars';

export const CategoryNavPillsStyles = styled.ul`
    list-style-type: none;
    padding-inline-start: 0;
    margin: 15px 0;
    
    li {
        display: inline-block;
        background-color: ${themeColors.brandColorSecondaryLight};
        border-radius: 10px;
        padding: 10px;
        margin-right: 5px;
        margin-bottom: 5px;

        &:hover {
            cursor: pointer;
        }
    }
`;
