/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header sx={{ mb: 1 }}>
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        px: 2,
        pt: 4,
        pb: 2,
      }}
    >
      <h1 sx={{ margin: 0 }}>
        <Link
          to="/"
          sx={{
            textDecoration: `none`,
            "&:visited": {
              color: "inherit",
            },
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
