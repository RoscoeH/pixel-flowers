/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useEffect, useState } from "react"

import { range } from "../core/utils"
import { useFlower, pickRandomColors } from "../hooks/useFlower"
import { FlowerSvg as Flower } from "./Flower"
import Button from "./Button"
import { KINDS as STEMS } from "../paths/stems"

const PARTS = ["stem", "pistil", "petals", "pot"]
const STEPS = [
  { name: "stem", description: "Start by sprouting a stem..." },
  {
    name: "pistil",
    description: (
      <span>
        Then, grow a pistil <small>(no, not the handgun)</small>
      </span>
    ),
  },
  { name: "petals", description: "Next, bloom some petals..." },
  { name: "pot", description: "Place it in a pot..." },
  { name: "color", description: "And finally, go wild with color!" },
  { name: "done", description: "All done!" },
]
const STEP_NAMES = STEPS.map(({ name }) => name)

const INITIAL_FLOWER = {
  stem: STEMS[0],
  stemColor: "green",
  stemColor2: "lightgreen",
}

function Pagination({ total, index }) {
  return (
    <div sx={{ display: "flex", justifyContent: "center", py: 3 }}>
      {range(total).map(i => (
        <div
          sx={{
            bg: i === index ? "muted" : "muted2",
            width: 3,
            height: 3,
            mx: 1,
            borderRadius: 3,
            boxShadow: ({ colors }) =>
              i === index ? "none" : `inset 0 0 0 1px ${colors.muted}`,
          }}
        />
      ))}
    </div>
  )
}

export default function Explainer() {
  const [step, setStep] = useState(0)
  const { flower, setFlower, nextKind } = useFlower(INITIAL_FLOWER)

  const nextStep = () => step < STEPS.length && setStep(step + 1)
  const restart = () => {
    setStep(0)
    setFlower(INITIAL_FLOWER)
  }

  const flowerProps = {
    backgroundColor: "transparent",
    ...flower,
  }

  useEffect(() => {
    const stepName = STEP_NAMES[step]
    const executeStep = () => {
      switch (stepName) {
        case "done":
          break
        case "color":
          setFlower({ ...flower, ...pickRandomColors() })
          break
        default:
          nextKind(stepName)
      }
    }

    if (PARTS.includes(stepName) && !flower[stepName]) {
      executeStep()
    }
    const interval = setInterval(executeStep, 100)

    return () => clearInterval(interval)
  }, [step, flower, setFlower, nextKind])

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        maxWidth: 12,
        p: 3,
        border: "default",
        borderColor: "muted",
        borderRadius: 4,
        m: "0 auto",
      }}
    >
      <Themed.p sx={{ textAlign: "center" }}>
        {STEPS[step].description}
      </Themed.p>
      <Flower {...flowerProps} width="100%" rounded />
      <Pagination index={step} total={STEP_NAMES.length} />
      {step < STEP_NAMES.length - 1 ? (
        <Button onClick={nextStep}>Next</Button>
      ) : (
        <Button onClick={restart}>Restart?</Button>
      )}
    </div>
  )
}
