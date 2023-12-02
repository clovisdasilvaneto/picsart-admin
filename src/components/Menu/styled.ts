import styled, { DefaultTheme, css } from 'styled-components'

export const MenuWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li:first-of-type {
    padding-top: 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    display: none;
  }
`

const getActiveLinkCSS = ({ theme }: { theme: DefaultTheme }) => `

	&, span {
		color: ${theme.palette.common.white};
	}

	path {
		stroke: ${theme.palette.common.white};
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
      background: ${({ theme }) => theme.palette.common.black};
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
