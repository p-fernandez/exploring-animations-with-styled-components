import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    background-color: #a99c7a;
    transition: all 1s ease-in;
  }
`;

export default StyledLink;
