import styled from 'styled-components';
import { zIndices } from '../utils/stylevars';

export const HomeBarSuppliesStyles = styled.main`
  .dropdown {
    max-width: 400px;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    border-top: dotted 1px #ccc;
  }

.dropdown .dropdown-btn {
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #777;
}
.dropdown-content {
  position: absolute;
  left: 0;
  width: 100%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  z-index: ${zIndices.filterDropdown};
}
.dropdown-content .item {
  padding: 10px;
  cursor: pointer;
}
.dropdown-content .item:hover {
  background: #fcfcfc;
}

button {
  z-index: -1;
  display: block;
  width: 300px;
  margin: 0 auto;
}


`;