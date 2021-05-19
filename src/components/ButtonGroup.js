/** @jsxImportSource theme-ui */

export default function ButtonGroup({ expand, children }) {
  return (
    <div
      sx={{
        display: expand ? "flex" : "block",
        "& > *": {
          flex: `1 1 ${Math.floor(100 / (children.length || 1))}%`,
        },
        "& > *:not(:last-child)": {
          mr: 2,
        },
      }}
    >
      {children}
    </div>
  )
}
