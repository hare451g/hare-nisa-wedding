import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 8px;
  height: 380px;
  overflow-y: scroll;
`;

const Entry = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.foreground};
    border: none;
    border-radius: 8px;
    margin-bottom: 4px;
  `
);

const MessageField = styled.p(
  ({ theme: { typography, colors } }) => css`
    color: ${colors.background};
    font-size: ${typography.size.medium};
    padding: 4px 8px;
    margin: 0;
    text-align: right;
  `
);

const NameField = styled.p(
  ({ theme: { typography, colors } }) => css`
    color: ${colors.background};
    font-size: ${typography.size.small};
    padding: 4px 8px;
    margin: 0;
  `
);

const Title = styled.h1(
  ({ theme: { typography } }) => css`
    padding-top: 8px;
    font-family: ${typography.family.display};
    font-size: ${typography.size.large};
    text-align: center;
  `
);

export { Container, Entry, MessageField, NameField, Title };
