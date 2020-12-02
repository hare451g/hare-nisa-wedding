import styled, { css } from 'styled-components';

import Flex from '../../styled/Flex';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

const FormGroup = styled(Flex)`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h1(
  ({ theme: { typography } }) => css`
    text-align: center;
  `
);

const Title = styled.h1(
  ({ theme: { typography } }) => css`
    padding: 0;
    margin: 0;
    font-family: ${typography.family.display};
    font-size: ${typography.size.display};
    text-align: center;
  `
);

export { Form, FormGroup, Subtitle, Title };
