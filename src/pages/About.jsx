import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  padding: 2rem 0;
`;

const PhotoBlock = styled.div`
  flex: 1;
  min-width: 280px;

  img {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #d4af37;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 280px;
`;

const Title = styled.h1`
  color: #fff;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 1.2rem;
`;

export default function About() {
  return (
    <Wrapper>
      <PhotoBlock>
        <img
          src="https://placehold.co/500x600/222/d4af37?text=Laritza"
          alt="Laritza, hairstylist"
        />
      </PhotoBlock>
      <TextBlock>
        <Title>About Me</Title>
        <Paragraph>
          I'm a professional hairstylist with over 24 years of experience in
          the beauty industry. Since 2001, I've been passionate about
          helping my clients look and feel their best. Throughout my
          career, I've developed strong expertise in hair care, styling,
          coloring, and specialized treatments.
        </Paragraph>
        <Paragraph>
          I take pride in providing professional, personalized service and
          building long-lasting relationships with my clients. My goal is
          always to make every client feel confident, beautiful, and
          comfortable in my chair.
        </Paragraph>
      </TextBlock>
    </Wrapper>
  );
}
