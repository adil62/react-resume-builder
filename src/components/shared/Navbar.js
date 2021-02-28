import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLI = styled(NavLink)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 1rem;
  font-weight: 600;
  &:nth-child(1) {
    margin-left: auto;
  }
`;

const StyledUl = styled.ul`
  box-shadow: 5px 0px 5px 0px rgb(208 208 208);
  list-style: none;
  display: flex;
  height: 10%;
  padding: 1rem 2rem;
  align-items: center;
  li:nth-child(1) {
    margin-left: auto;
  }
`;

const Navbar = () => {
  return (
    <StyledUl>
      <StyledLI activeClassName="active" to="/create">
        Create
      </StyledLI>

      <StyledLI activeClassName="active" to="/view">
        View
      </StyledLI>

      <StyledLI activeClassName="active" to="/edit">
        Edit
      </StyledLI>
    </StyledUl>
  );
};

export default Navbar;
