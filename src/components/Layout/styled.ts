import { Container } from '@mui/material'
import styled from 'styled-components'

export const LayoutWrapper = styled(Container)`
  margin-top: 10vh;

  && {
    display: grid;
    grid-template-columns: 260px auto;
    padding-bottom: 2rem;

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
      grid-template-columns: auto;
      grid-row-gap: 2rem;
      padding: 0;
    }
  }
`

export const LayoutColumn = styled.div`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: 2rem;
  box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  position: relative;
  min-height: calc(100vh - 341px);

  @media only screen and (max-width: 1120px) {
    margin-top: 2rem;
    padding-inline: 1.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    margin-bottom: -5rem;

    > div {
      margin: 0;
    }
  }
`
