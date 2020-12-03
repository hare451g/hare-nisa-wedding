import styled, { css } from 'styled-components';

import Flex from '../../styled/Flex';

const Form = styled.form(
  ({ theme: { colors } }) => css`
    display: flex;
    flex-direction: column;
    padding: 8px 16px;
    border-top: 1px solid ${colors.gray3};
    padding-bottom: 32px;
  `
);

const FormGroup = styled(Flex)`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h1`
  text-align: center;
`;

const Title = styled.h1(
  ({ theme: { typography } }) => css`
    padding: 0;
    margin: 0;
    font-family: ${typography.family.display};
    font-size: ${typography.size.large};
    text-align: center;
  `
);

export { Form, FormGroup, Subtitle, Title };
