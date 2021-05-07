/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import { navigate } from "@reach/router"
import InfiniteScroll from "react-infinite-scroll-component"

import { FlowerSvg } from "./Flower"
import { pickRandomFlower } from "../hooks/useFlower"
import { urlEncode } from "../core/utils"

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

  function goToFlower(flower) {
    const flowerUrl = urlEncode(flower)
    navigate(`/flower/${flowerUrl}`)
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
          width={96}
          height={104}
          style={{ flex: "1 1 auto", margin: "4px" }}
          {...flower}
          onClick={() => goToFlower(flower)}
        />
      ))}
    </InfiniteScroll>
  )
}

export default InfiniteFlowers
