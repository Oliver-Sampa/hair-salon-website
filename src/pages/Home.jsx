import styled from "styled-components";
import { Link } from "react-router-dom";
import heroImg from "../assets/salon.jpg";

const Hero = styled.section`
  position: relative;
  min-height: 60vh;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: url(${heroImg}) center / cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Content = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 550px;
  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`;

function Home() {
  return (
    <Hero>
      <Content>
        <h1>Welcome to Laritza's Hair Salon</h1>
        <p>Fresh cuts, sharp fades, and styles for everyone.</p>
        <Button to="/services">See Our Services</Button>
      </Content>
    </Hero>
  );
}

export default Home;
