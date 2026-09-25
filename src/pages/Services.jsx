import styled from 'styled-components';
import { womenServices, menServices } from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: #d4af37;
  margin: 2rem 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
`;

export default function Services() {
  return (
    <div>
      <Title>Our Services</Title>
      <Subtitle>Take a look at everything we offer</Subtitle>

      <SectionTitle>Women's Services</SectionTitle>
      <Grid>
        {womenServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>

      <SectionTitle>Men's Services</SectionTitle>
      <Grid>
        {menServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>
    </div>
  );
}
