import { Box } from '@mui/material'
import styled, { DefaultTheme, css } from 'styled-components'

export const MenuWrapper = styled.ul<{ isOppened: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;

  li:first-of-type {
    padding-top: 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    transition: ease-out 0.3s all;
    overflow: hidden;

    ${({ isOppened }) => `
      opacity: ${isOppened ? 1 : 0};
      visibility: ${isOppened ? 'visible' : 'hidden'};
      max-height:${isOppened ? '400px' : 0};
    `}
  }
`

export const MobileMenuIcon = styled.div`
  padding: 2rem 2rem 0;
`

export const MenuThemeBox = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 1;
  padding: 2rem;
  cursor: pointer;

  button {
    margin-left: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    justify-content: flex-start;
  }
`

const getActiveLinkCSS = ({ theme }: { theme: DefaultTheme }) => `

	&, span {
		color: ${theme.palette.background.paper};
	}

	path {
		stroke: ${theme.palette.background.paper};
	}

	&:before {
		transform: translateX(0);
	}
`

const activeLiCSS = css`
  border-top: solid 1px transparent;

  + li {
    border-top: solid 1px transparent;
  }
`

export const MenuItem = styled.li<{ $active?: boolean }>`
  border-top: 1px solid #cecece;
  transition: all ease-out 0.3s;

  &:first-of-type {
    border-top: solid 1px transparent;
  }

  ${({ $active }) => $active && activeLiCSS}
  &:not(:first-of-type):hover {
    ${activeLiCSS}
  }

  > h3,
  > a,
  > p {
    padding: 20px 10px 20px 32px;
  }

  a,
  > p {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      background: ${({ theme }) => theme.palette.text.primary};
      left: 0;
      top: 0;
      transform: translateX(100%);
      transition: all ease-out 0.3s;
      z-index: 1;

      @media only screen and (max-width: 1120px) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }

    ${({ $active, ...props }) => $active && getActiveLinkCSS(props)}

    svg {
      margin-right: 16px;
    }

    path {
      stroke: ${({ theme }) => theme.palette.common.black};
    }

    svg,
    path,
    span {
      position: relative;
      z-index: 2;
      transition: all ease-out 0.3s;
    }

    &:hover {
      ${getActiveLinkCSS}
    }
  }
`
