import React, { FC } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Global, css } from "@emotion/react"
import theme from "../../theme"
import "focus-visible/dist/focus-visible"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import Head from "next/head"

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus  via the mouse,
    but it will still show up on keyboard focus.
    This is for accessiblity. 
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`

const AppLayout: FC<{ children: ReactJSXElement }> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Head>
        <title>Zealoo</title>
        <meta name="description" content="Empowering the motion" />
        <link rel="icon" href="/assets/icons/zealoo-logo-2.png" />
      </Head>
      {children}
    </ChakraProvider>
  )
}

export default AppLayout;