import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 3rem;
    @media (max-width: 600px) {
    padding-bottom: 4.5rem;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.9rem;
`;

const Contact = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

function Footer() {
  return (
    <FooterWrapper>
      <Inner>
        <span>© {new Date().getFullYear()} Laritza's Hair Salon. All rights reserved.</span>
        <Contact>Phone: (813) 368-6822</Contact>
      </Inner>
    </FooterWrapper>
  );
}

export default Footer;