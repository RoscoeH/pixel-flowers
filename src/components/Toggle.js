/** @jsxImportSource theme-ui */
import { useThemeUI } from "theme-ui"
import { motion } from "framer-motion"

export default function Toggle({
  value = false,
  disabled = false,
  onToggle,
  sx,
}) {
  const { theme } = useThemeUI()
  const { colors } = theme

  const handleClick = () => onToggle && onToggle()
  const mutedOrPrimaryColor = disabled ? "muted" : "primary"

  const variants = {
    enabledOn: {},
    enabledOff: {},
    disabledOn: {},
    disabledOff: {},
  }
  const trackVariants = {
    enabledOn: { backgroundColor: colors.primary },
    enabledOff: { backgroundColor: colors.light },
    disabledOn: { backgroundColor: colors.muted },
    disabledOff: { backgroundColor: colors.light },
  }
  const handleVariants = {
    enabledOn: { x: 24 },
    enabledOff: { x: 0 },
    disabledOn: { x: 24 },
    disabledOff: { x: 0 },
  }

  const enabledOrDisabledOn = disabled ? "disabledOn" : "enabledOn"
  const enabledOrDisabledOff = disabled ? "disabledOff" : "enabledOff"

  return (
    <motion.div
      variants={variants}
      animate={value ? enabledOrDisabledOn : enabledOrDisabledOff}
      initial={false}
      sx={{
        display: "inline-block",
        py: 3,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={handleClick}
    >
      <motion.div
        variants={trackVariants}
        sx={{
          bg: value ? mutedOrPrimaryColor : "light",
          width: 7,
          borderRadius: 4,
          boxShadow: ({ colors }) =>
            `inset 0 0 0 1px ${disabled ? colors.muted : colors.primary}`,
        }}
      >
        <motion.div
          variants={handleVariants}
          sx={{
            width: 5,
            height: 5,
            borderRadius: 4,
            bg: "light",
            border: "default",
            borderColor: disabled ? "muted" : "primary",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
