
import styled from 'styled-components';

const GalleryWrapper = styled.section`
  padding: 4rem 2rem;
  background: #000;
  text-align: center;
`;

const Title = styled.h2`
  color: #d4af37;
  font-size: 2rem;
  margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  border: 1px solid #d4af37;
  border-radius: 8px;
  overflow: hidden;
  background: #111;
`;

const ImagePair = styled.div`
  display: flex;
`;

const ImageBlock = styled.div`
  flex: 1;
  position: relative;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
  }
`;

const Label = styled.span`
  position: absolute;
  bottom: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: #d4af37;
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  text-transform: uppercase;
`;

const Caption = styled.p`
  color: #fff;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
`;

const transformations = [
  {
    before: 'https://placehold.co/400x300/222/d4af37?text=Before',
    after: 'https://placehold.co/400x300/d4af37/000?text=After',
    caption: 'Classic Fade',
  },
  {
    before: 'https://placehold.co/400x300/222/d4af37?text=Before',
    after: 'https://placehold.co/400x300/d4af37/000?text=After',
    caption: 'Curls & Styling',
  },
  {
    before: 'https://placehold.co/400x300/222/d4af37?text=Before',
    after: 'https://placehold.co/400x300/d4af37/000?text=After',
    caption: 'Beard Trim',
  },
];

export default function Gallery() {
  return (
    <GalleryWrapper>
      <Title>Before & After</Title>
      <Grid>
        {transformations.map((item, i) => (
          <Card key={i}>
            <ImagePair>
              <ImageBlock>
                <img src={item.before} alt={`Before - ${item.caption}`} />
                <Label>Before</Label>
              </ImageBlock>
              <ImageBlock>
                <img src={item.after} alt={`After - ${item.caption}`} />
                <Label>After</Label>
              </ImageBlock>
            </ImagePair>
            <Caption>{item.caption}</Caption>
          </Card>
        ))}
      </Grid>
    </GalleryWrapper>
  );
}