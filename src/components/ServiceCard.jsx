import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  padding: 1rem 1.25rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.1rem;
  }
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  font-size: 1.1rem;
`;

function ServiceCard({ service }) {
  const { name, price, image } = service;

  return (
    <Card>
      <img src={image} alt={name} />
      <Info>
        <h3>{name}</h3>
        <Price>${price}</Price>
      </Info>
    </Card>
  );
}

export default ServiceCard;
