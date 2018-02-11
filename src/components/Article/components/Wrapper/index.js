import styled from 'styled-components';

export default styled.div`
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing(3)};
  &:first-child {
    margin-top: 0;
  }
  @media (${({ theme }) => theme.breakpoints.md}) {
    &:nth-child(2) {
      margin-top: 0;
    }
    &:nth-child(2n + 1) {
      margin-right: ${({ theme }) => `calc(${theme.spacing(1)} * 1.5)`};
    }
    &:nth-child(2n) {
      margin-left: ${({ theme }) => `calc(${theme.spacing(1)} * 1.5)`};
    }
  }
  @media (${({ theme }) => theme.breakpoints.xl}) {
    &:nth-child(2n + 1) {
      margin-right: ${({ theme }) => theme.spacing(2)};
    }
    &:nth-child(2n) {
      margin-left: ${({ theme }) => theme.spacing(2)};
    }
  }
`;