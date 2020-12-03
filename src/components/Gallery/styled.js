import styled, { css } from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(14, 5vw);
  grid-gap: 15px;

  padding: 16px;

  /* Morning Gallery */
  .morning_1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .morning_2 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;
  }

  .morning_3 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 6;
    grid-row-end: 10;
  }

  .morning_4 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 10;
  }

  .morning_5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 10;
    grid-row-end: 15;
  }

  .morning_6 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 10;
    grid-row-end: 15;
  }

  /* Noon Gallery */
  .noon_1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  .noon_2 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 4;
  }

  .noon_3 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 8;
  }

  .noon_4 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 4;
    grid-row-end: 15;
  }

  .noon_5 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 8;
    grid-row-end: 11;
  }

  .noon_6 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 11;
    grid-row-end: 15;
  }

  /* Night Gallery */
  .night_1 {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .night_2 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 6;
  }

  .night_3 {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 10;
    grid-row-end: 15;
  }

  .night_4 {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 6;
    grid-row-end: 10;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Title = styled.h1(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.display};
    font-size: ${typography.size.large};
    text-align: center;
  `
);

export { GalleryContainer, GalleryImage, Title };
