import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 8px;
  height: 300px;
  overflow-y: scroll;
  transition: 1s;

  :hover {
    height: 600px;
    transition: 1s;
  }
`;

const DateField = styled.p(
  ({ theme: { typography, colors } }) => css`
    color: ${colors.background};
    font-size: ${typography.size.small};
    font-family: ${typography.family.monospace};
    padding: 4px 8px;
    margin: 0;
    text-align: right;
  `
);

const Entry = styled.div(
  ({ theme: { colors } }) => css`
    background-color: ${colors.foreground};
    border: none;
    border-radius: 8px;
    margin: 0px 16px;
    margin-bottom: 24px;

    padding: 8px;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    :hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `
);

const MessageField = styled.p(
  ({ theme: { typography, colors } }) => css`
    color: ${colors.background};
    font-size: ${typography.size.medium};
    padding: 4px 8px;
    margin: 0;
    text-align: right;

    @media (min-width: 720px) {
      font-size: ${typography.size.medium};
    }
  `
);

const NameField = styled.p(
  ({ theme: { typography, colors } }) => css`
    color: ${colors.background};
    font-weight: 600;
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

export { Container, DateField, Entry, MessageField, NameField, Title };
