import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  max-width: 480px;
  padding-bottom: 32px;

  @media (min-width: 720px) {
    max-width: 900px;
  }
`;

export default Container;
