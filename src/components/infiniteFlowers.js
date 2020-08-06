/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import { FlowerSvg } from "./flower"
import { pickRandomFlower } from "../hooks/flower"

const INITIAL_FLOWERS = 72
const FETCH_SIZE = 32

const InfiniteFlowers = () => {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const newFlowers = []
    for (let i = 0; i < INITIAL_FLOWERS; i++) {
      newFlowers.push(pickRandomFlower())
    }
    setFlowers(newFlowers)
  }, [])

  function fetchFlowers() {
    const newFlowers = flowers.slice()
    for (let i = 0; i < FETCH_SIZE; i++) {
      newFlowers.push(pickRandomFlower())
    }
    setFlowers(newFlowers)
  }

  return (
    <InfiniteScroll
      next={fetchFlowers}
      dataLength={flowers.length}
      scrollThreshold={0.7}
      hasMore={true}
      style={{ display: "flex", flexWrap: "wrap", margin: "0 -4px" }}
    >
      {flowers.map((flower, i) => (
        <FlowerSvg
          key={i}
          width={120}
          height={128}
          style={{ flex: "1 1 auto", margin: "4px" }}
          {...flower}
        />
      ))}
    </InfiniteScroll>
  )
}

export default InfiniteFlowers
