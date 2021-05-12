/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"

import ConfigItem from "./ConfigItem"
import { usePart, PARTS } from "../hooks/useFlower"

export default function ConfigList({ part }) {
  const { properties, togglePart, setKind, setColor, setColor2 } = usePart(part)
  const enabled = !togglePart || (togglePart && properties[`${part}Enabled`])

  return (
    <div
      sx={{
        bg: "muted2",
        "& > *:not(:last-child)": {
          mb: 2,
        },
      }}
    >
      {togglePart && (
        <ConfigItem.Boolean
          label="Enabled"
          value={enabled}
          onChange={togglePart}
        />
      )}
      <ConfigItem.List
        values={PARTS[part]}
        value={properties[part]}
        onChange={setKind}
        disabled={!enabled}
      />
      <ConfigItem.Color
        label="Primary Color"
        value={properties[`${part}Color`]}
        onChange={setColor}
        disabled={!enabled}
      />
      {setColor2 && (
        <ConfigItem.Color
          label="Secondary Color"
          value={properties[`${part}Color2`]}
          onChange={setColor2}
          disabled={!enabled}
        />
      )}
    </div>
  )
}
