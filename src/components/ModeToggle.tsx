"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const hasAutoSetTheme = useRef(false)

  useEffect(() => {
    // Run only once
    if (hasAutoSetTheme.current) return
    hasAutoSetTheme.current = true

    console.log("[Theme] Initial theme:", theme)

    // Respect existing user preference
    if (theme && theme !== "system") {
      console.log("[Theme] User preference already set, skipping auto theme")
      return
    }

    try {
      console.log(
        "[Theme] AmbientLightSensor exists in window:",
        "AmbientLightSensor" in window
      )

      if ("AmbientLightSensor" in window) {
        console.log("[Theme] Creating AmbientLightSensor instance")

        // @ts-ignore - AmbientLightSensor is experimental
        const sensor = new AmbientLightSensor()

        let hasReading = false

        const timeoutId = setTimeout(() => {
          if (!hasReading) {
            console.warn(
              "[Theme] No ambient light reading received — likely no hardware sensor"
            )
            sensor.stop()
          }
        }, 1500) // wait max 1.5s

        sensor.addEventListener("reading", () => {
          hasReading = true
          clearTimeout(timeoutId)

          const lux = sensor.illuminance
          console.log(`[Theme] Detected ambient light: ${lux} lux`)

          if (lux < 50) {
            console.log("[Theme] → Applying DARK theme")
            setTheme("dark")
          } else if (lux > 150) {
            console.log("[Theme] → Applying LIGHT theme")
            setTheme("light")
          } else {
            console.log("[Theme] → Neutral light, no change")
          }

          sensor.stop()
          console.log("[Theme] Sensor stopped (one-time execution)")
        })

        sensor.addEventListener("error", (event: any) => {
          console.error("[Theme] AmbientLightSensor error:", event?.error)
          clearTimeout(timeoutId)
        })

        sensor.start()
        console.log("[Theme] Sensor started, waiting for reading...")
      } else {
        console.warn(
          "[Theme] AmbientLightSensor NOT supported on this device/browser"
        )
      }
    } catch (err) {
      console.error("[Theme] Ambient Light Sensor exception:", err)
    }
  }, [theme, setTheme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
