import { useEffect, useRef, useState } from "react"
import "./Reveal.css"

function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 70,
  duration = 900,
  once = false,
}) {
  const [isVisible, setIsVisible] = useState(false)

  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.18,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once])

  return (
    <div
      ref={elementRef}
      className={`reveal reveal-${direction} ${
        isVisible ? "reveal-visible" : ""
      }`}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-distance": `${distance}px`,
        "--reveal-duration": `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default Reveal