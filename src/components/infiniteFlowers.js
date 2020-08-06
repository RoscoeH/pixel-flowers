import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

import { FlowerSvg } from "./flower"
import { pickRandomFlower } from "../hooks/flower"

const INITIAL_FLOWERS = 64
const FETCH_SIZE = 16

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
      hasMore={true}
    >
      {flowers.map((flower, i) => (
        <FlowerSvg key={i} {...flower} />
      ))}
    </InfiniteScroll>
  )
}

export default InfiniteFlowers
