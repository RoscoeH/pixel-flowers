/** @jsxImportSource theme-ui */
import { Themed, Link } from "theme-ui"
import PropTypes from "prop-types"
import { use100vh } from "react-div-100vh"

import SEO from "./SEO"
import Header from "./Header"

const Layout = ({ hideHeader, hideFooter, children }) => {
  const height = use100vh()
  return (
    <div
      sx={{
        minHeight: height,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <SEO />
      {!hideHeader && <Header />}
      <main sx={{ flexGrow: 1 }}>
        <div sx={{ maxWidth: 14, px: 3, margin: "0 auto" }}>{children}</div>
      </main>
      {!hideFooter && (
        <footer
          sx={{
            bg: "muted2",
            fontSize: 0,
            textAlign: "center",
            py: 1,
          }}
        >
          <Themed.p>
            Made with 💜 by <Link href="https://roscoe.dev">roscoe.dev</Link>
            <br />
            Check out my other{" "}
            <Link href="https://roscoe.dev/projects">web thingies</Link>
            <br />
            Want to support me?{" "}
            <Link href="https://www.buymeacoffee.com/roscoe.dev">
              buy me a coffee
            </Link>{" "}
            ☕<br />
            &copy; {new Date().getFullYear()}{" "}
            <Link href="https://roscoe.dev">roscoe.dev</Link>
          </Themed.p>
        </footer>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
