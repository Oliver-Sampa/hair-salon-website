import styled from "styled-components";

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Card = styled.div`
  max-width: 500px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  p {
    margin-bottom: 0.75rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

function Contact() {
  return (
    <>
      <Title>Contact</Title>
      <Card>
        <p><strong>Only by Appointment</strong> </p>
        <p><strong>Phone:</strong> (813) 368-6822</p>
        <p><strong>Address:</strong> <p>
             West Tampa, FL<br />
             Between Armenia Ave & Hillsborough Ave
    </p></p>
        <p><strong>Hours:</strong> Tue-Sat, 9am to 5pm</p>
      </Card>
    </>
  );
}

export default Contact;
