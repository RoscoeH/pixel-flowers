/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import Toggle from "./Toggle"

function Boolean({ label, value, onChange, disabled }) {
  return (
    <div
      sx={{
        bg: "background",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderRadius: 3,
        px: 2,
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled
          ? "none"
          : ({ colors }) => `inset 0 0 0 1px ${colors.muted}`,
        "&:hover": {
          boxShadow: disabled
            ? "none"
            : ({ colors }) => `inset 0 0 0 1px ${colors.primary}`,
        },
      }}
    >
      <label sx={{ color: disabled ? "muted" : "text" }}>{label}</label>
      <Toggle value={value} disabled={disabled} onToggle={onChange} />
    </div>
  )
}

function Color() {
  return <div>ConfigItem.Color</div>
}

function List() {
  return <div>ConfigItem.List</div>
}

const ConfigItem = {
  Boolean,
  Color,
  List,
}

export default ConfigItem
