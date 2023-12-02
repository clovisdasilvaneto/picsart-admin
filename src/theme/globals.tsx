import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
			inset 0 0 0 100px rgba(255, 255, 255, 1) !important;
	}
`

export default GlobalStyles
