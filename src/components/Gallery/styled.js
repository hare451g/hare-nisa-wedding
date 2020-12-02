import styled, { css } from 'styled-components';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(14, 5vw);
  grid-gap: 15px;

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

  border-radius: 4px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const Title = styled.h1(
  ({ theme: { typography } }) => css`
    font-family: ${typography.family.display};
    font-size: ${typography.size.large};
    text-align: center;
  `
);

export { GalleryContainer, GalleryImage, Title };
