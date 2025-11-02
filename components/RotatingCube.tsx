"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function RotatingDraggableCube() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const id = setInterval(() => {
      if (!dragging) {
        setRotation(prev => ({ x: prev.x + 0.2, y: prev.y + 0.5 }))
      }
    }, 16)
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

  // cores Tailwind
  const faces = [
    { name: "front", colors: ["bg-red-500","bg-green-500","bg-blue-500","bg-yellow-400","bg-white","bg-orange-500","bg-blue-500","bg-red-500","bg-green-500"] },
    { name: "back", colors: ["bg-orange-500","bg-white","bg-yellow-400","bg-green-500","bg-blue-500","bg-red-500","bg-white","bg-yellow-400","bg-orange-500"] },
    { name: "right", colors: ["bg-blue-500","bg-green-500","bg-red-500","bg-white","bg-orange-500","bg-yellow-400","bg-green-500","bg-blue-500","bg-red-500"] },
    { name: "left", colors: ["bg-yellow-400","bg-orange-500","bg-white","bg-red-500","bg-green-500","bg-blue-500","bg-orange-500","bg-yellow-400","bg-white"] },
    { name: "top", colors: ["bg-white","bg-red-500","bg-green-500","bg-blue-500","bg-yellow-400","bg-orange-500","bg-green-500","bg-blue-500","bg-red-500"] },
    { name: "bottom", colors: ["bg-orange-500","bg-yellow-400","bg-blue-500","bg-white","bg-red-500","bg-green-500","bg-yellow-400","bg-orange-500","bg-blue-500"] }
  ]

  return (
    <div
      className="flex items-center justify-center w-64 h-64 perspective-normal"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/icon-chain.png"
        alt="blockchain"
        width={300}
        height={300}
        className="absolute opacity-50"
      />
      <div
        className="absolute w-32 h-32 cursor-grab"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        onMouseDown={handleMouseDown}
      >
        {faces.map((face) => (
          <div
            key={face.name}
            className="absolute w-25 h-25 grid grid-cols-3 grid-rows-3 gap-0 "
            style={{
              transform:
                face.name === "front" ? "translateZ(50px)" :
                face.name === "back" ? "rotateY(180deg) translateZ(50px)" :
                face.name === "right" ? "rotateY(90deg) translateZ(50px)" :
                face.name === "left" ? "rotateY(-90deg) translateZ(50px)" :
                face.name === "top" ? "rotateX(90deg) translateZ(50px)" :
                "rotateX(-90deg) translateZ(50px)"
            }}
          >
            {face.colors.map((color, i) => (
              <div key={i} className={`${color} border border-gray-700`}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
