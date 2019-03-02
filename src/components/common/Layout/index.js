import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from 'react'
import { NavBar, Footer } from '../'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import { string, object } from 'prop-types'
import { Global } from '../../GlobalStyles'
import SEO from '../SEO'

const Layout = ({ title, description, children }) => (
  <>
    <Global />
    <SEO />
    <ThemeProvider theme={theme}>
      <Fragment>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </Fragment>
    </ThemeProvider>
  </>
)

Layout.propTypes = {
  title: string,
  query: object
}
export default Layout
