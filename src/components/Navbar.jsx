import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;


const Logo = styled.h1`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: #d4af37;
`;


const Links = styled.ul`
  display: flex;
  gap: 1rem;

  a {
    font-weight: 500;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
    transition: color 0.2s, border-color 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  a.active {
    color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

function Navbar() {
  return (
    <Nav>
      <Inner>
        <Logo>Laritza's Hair Salon</Logo>
        <Links>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
        </Links>
      </Inner>
      
    </Nav>
  );
}

export default Navbar;
