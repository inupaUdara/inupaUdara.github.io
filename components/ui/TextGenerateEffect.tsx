"use client"

import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "framer-motion"
import { cn } from "@/utils/cn"

interface TextGenerateEffectProps {
  words: string
  className?: string
}

export const TextGenerateEffect = ({ words, className }: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate()
  const [isVisible, setIsVisible] = useState(false)
  const wordsArray = words.split(" ")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.1),
        },
      )
    }, 1000)

    return () => clearTimeout(timer)
  }, [animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{" "}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return <div className={cn("font-normal", className)}>{renderWords()}</div>
}
