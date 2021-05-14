/** @jsxImportSource theme-ui */
import Toggle from "./Toggle"
import ColorInput from "./ColorInput"
import Switcher from "./Switcher"

function ConfigWrapper({ label, disabled, children, onClick }) {
  return (
    <div
      sx={{
        bg: disabled ? "transparent" : "background",
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
      onClick={onClick}
    >
      <label sx={{ color: disabled ? "muted" : "text", mr: 2 }}>{label}</label>
      {children}
    </div>
  )
}

function Boolean({ label, value, onChange, disabled }) {
  return (
    <ConfigWrapper label={label} disabled={disabled} onClick={onChange}>
      <Toggle value={value} disabled={disabled} onToggle={onChange} />
    </ConfigWrapper>
  )
}

function Color({ label, value, onChange, disabled }) {
  return (
    <ConfigWrapper label={label} disabled={disabled}>
      <ColorInput color={value} disabled={disabled} onChange={onChange} />
    </ConfigWrapper>
  )
}

const ConfigItem = {
  Boolean,
  Color,
  List: Switcher,
}

export default ConfigItem
