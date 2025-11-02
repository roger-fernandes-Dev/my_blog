"use client"
import { useState, useEffect } from "react"

export default function RotatingDraggableCube() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  // rotação automática
  useEffect(() => {
    const id = setInterval(() => {
      if (!dragging) {
        setRotation(prev => ({ x: prev.x + 0.2, y: prev.y + 0.5 })) // velocidade lenta
      }
    }, 16) // ~60fps
    return () => clearInterval(id)
  }, [dragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true)
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return
    const deltaX = e.clientX - lastPos.x
    const deltaY = e.clientY - lastPos.y
    setRotation(prev => ({ x: prev.x + deltaY, y: prev.y + deltaX }))
    setLastPos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => setDragging(false)
  const handleMouseLeave = () => setDragging(false)

  const faces = ["front", "back", "right", "left", "top", "bottom"]

  return (
    <div
      className="flex items-center justify-center w-32 h-32 perspective-normal"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-32 h-32 cursor-grab"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseDown={handleMouseDown}
      >
        {faces.map((face) => (
          <div
            key={face}
            className="absolute w-24 h-24 bg-gray-700 border border-gray-500"
            style={{
              transform:
                face === "front" ? "translateZ(50px)" :
                face === "back" ? "rotateY(180deg) translateZ(50px)" :
                face === "right" ? "rotateY(90deg) translateZ(50px)" :
                face === "left" ? "rotateY(-90deg) translateZ(50px)" :
                face === "top" ? "rotateX(90deg) translateZ(50px)" :
                "rotateX(-90deg) translateZ(50px)"
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
