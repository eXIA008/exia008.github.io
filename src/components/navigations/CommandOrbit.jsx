import { useState, useRef, useEffect, useCallback } from "react"

export default function CommandOrbit({
  actions = [],
  radius = 130,
  showLabels = true,
  className = "",
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const n = actions.length

  return (
    <div
      ref={ref}
      className={`relative flex aspect-square items-center justify-center ${className}`}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        style={{ width: radius * 2 + 8, height: radius * 2 + 8 }}
      />

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
        style={{ width: radius * 0.55 * 2, height: radius * 0.55 * 2 }}
      />

      {actions.map((action, i) => {
        const angle = ((2 * Math.PI) / n) * i - Math.PI / 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const Icon = action.icon

        return (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="absolute"
            style={{
              left: "50%",
              top: "52%",
              transform: open
                ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                : "translate(-50%, -50%)",
              transitionDelay: open ? `${i * 90}ms` : `${(n - 1 - i) * 50}ms`,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDuration: "0.5s",
              transitionProperty: "transform, opacity",
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
            }}
          >
            <div className="group flex flex-col items-center gap-1.5">
              <div className="flex h-13 w-13 items-center justify-center rounded-full border border-white/10 bg-background/60 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/15 hover:scale-110 hover:-translate-y-0.5">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              {showLabels && (
                <span className="grid text-xs overflow-hidden whitespace-nowrap text-foreground/90">
                  <div className="col-start-1 row-start-1 translate-y-0 transform-gpu transition-transform duration-500
                  group-hover:-translate-y-[110%]">
                    {action.label}
                  </div>
                  <div className="col-start-1 row-start-1 translate-y-[110%] transform-gpu
                  transition-transform duration-500 group-hover:translate-y-0">
                    {action.username}
                  </div>
                </span>
              )}
            </div>
          </a>
        )
      })}

      <GlobeButton open={open} onClick={() => setOpen((v) => !v)} />
    </div>
  )
}

function GlobeButton({ open, onClick }) {
  const canvasRef = useRef(null)
  const angleRef = useRef(0)
  const frameRef = useRef(null)

  const draw = useCallback(() => {
    const cvs = canvasRef.current
    if (!cvs) return
    const ctx = cvs.getContext("2d")
    const dpr = window.devicePixelRatio || 1
    const size = 72
    cvs.width = size * dpr
    cvs.height = size * dpr
    cvs.style.width = size + "px"
    cvs.style.height = size + "px"
    ctx.scale(dpr, dpr)

    const cx = size / 2, cy = size / 2, R = size / 2 - 2

    ctx.clearRect(0, 0, size, size)

    const glow = ctx.createRadialGradient(cx, cy, R, cx, cy, R + 8)
    glow.addColorStop(0, "rgba(56,189,248,0)")
    glow.addColorStop(0.6, "rgba(56,189,248,0)")
    glow.addColorStop(1, "rgba(56,189,248,0.3)")
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(cx, cy, R + 8, 0, Math.PI * 2)
    ctx.fill()

    const grad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, 0, cx, cy, R)
    grad.addColorStop(0, "#7dd3fc")
    grad.addColorStop(0.3, "#38bdf8")
    grad.addColorStop(0.6, "#1d4ed8")
    grad.addColorStop(0.85, "#1e3a5f")
    grad.addColorStop(1, "#0c1e35")
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(cx, cy, R, 0, Math.PI * 2)
    ctx.fill()

    ctx.save()
    ctx.beginPath()
    ctx.arc(cx, cy, R, 0, Math.PI * 2)
    ctx.clip()

    const angle = angleRef.current

    const landMasses = [
      // North America
      [[0.1, 0.25], [0.25, 0.18], [0.35, 0.15], [0.48, 0.16], [0.55, 0.2], [0.58, 0.25], [0.56, 0.3], [0.52, 0.35], [0.45, 0.4], [0.38, 0.42], [0.3, 0.42], [0.22, 0.4], [0.15, 0.35], [0.1, 0.3]],
      // South America
      [[0.28, 0.48], [0.38, 0.47], [0.44, 0.5], [0.48, 0.55], [0.48, 0.6], [0.44, 0.68], [0.38, 0.74], [0.32, 0.78], [0.28, 0.74], [0.25, 0.68], [0.22, 0.6], [0.22, 0.55], [0.24, 0.5]],
      // Europe
      [[0.52, 0.2], [0.6, 0.18], [0.66, 0.2], [0.68, 0.22], [0.66, 0.28], [0.6, 0.3], [0.55, 0.28], [0.52, 0.25]],
      // Africa
      [[0.52, 0.3], [0.62, 0.3], [0.7, 0.3], [0.78, 0.33], [0.82, 0.38], [0.84, 0.45], [0.82, 0.52], [0.78, 0.6], [0.72, 0.66], [0.62, 0.66], [0.55, 0.62], [0.5, 0.55], [0.48, 0.48], [0.48, 0.4], [0.48, 0.35]],
      // Asia
      [[0.66, 0.15], [0.78, 0.1], [0.88, 0.12], [0.95, 0.18], [0.98, 0.25], [0.98, 0.32], [0.94, 0.38], [0.86, 0.4], [0.78, 0.38], [0.72, 0.35], [0.68, 0.32], [0.66, 0.28], [0.64, 0.22]],
      // Australia
      [[0.78, 0.7], [0.86, 0.68], [0.92, 0.7], [0.95, 0.75], [0.92, 0.82], [0.84, 0.84], [0.78, 0.8], [0.76, 0.76]],
      // Greenland
      [[0.3, 0.1], [0.38, 0.08], [0.42, 0.1], [0.4, 0.15], [0.35, 0.18], [0.3, 0.15]],
      // UK/Ireland
      [[0.48, 0.18], [0.5, 0.17], [0.52, 0.18], [0.51, 0.2], [0.49, 0.21]],
    ]

    landMasses.forEach((pts) => {
      const projected = pts.map(([px, py]) => {
        const lng = (px - 0.5) * Math.PI * 2 + angle
        const lat = (py - 0.5) * Math.PI
        const x3 = R * Math.cos(lat) * Math.sin(lng)
        const y3 = -R * Math.sin(lat)
        const z3 = R * Math.cos(lat) * Math.cos(lng)
        const screenX = cx + x3
        const screenY = cy + y3
        return { x: screenX, y: screenY, z: z3 }
      })

      const avgZ = projected.reduce((s, p) => s + p.z, 0) / projected.length
      if (avgZ < 0) return

      ctx.beginPath()
      ctx.moveTo(projected[0].x, projected[0].y)
      for (let i = 1; i < projected.length; i++) ctx.lineTo(projected[i].x, projected[i].y)
      ctx.closePath()
      ctx.fillStyle = "rgba(52,211,153,0.45)"
      ctx.fill()
    })

    ctx.strokeStyle = "rgba(255,255,255,0.06)"
    ctx.lineWidth = 0.5
    for (let lat = -60; lat <= 60; lat += 30) {
      const rad = (lat * Math.PI) / 180
      ctx.beginPath()
      let started = false
      for (let lng = -180; lng <= 180; lng += 3) {
        const lngRad = (lng * Math.PI) / 180 + angle
        const x = cx + R * Math.cos(rad) * Math.sin(lngRad)
        const y = cy - R * Math.sin(rad)
        const z = R * Math.cos(rad) * Math.cos(lngRad)
        if (z < 0) { started = false; continue }
        started ? ctx.lineTo(x, y) : (ctx.moveTo(x, y), started = true)
      }
      ctx.stroke()
    }

    const hl = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, 0, cx, cy, R)
    hl.addColorStop(0, "rgba(255,255,255,0.2)")
    hl.addColorStop(0.3, "rgba(255,255,255,0.06)")
    hl.addColorStop(0.8, "rgba(255,255,255,0)")
    ctx.fillStyle = hl
    ctx.beginPath()
    ctx.arc(cx, cy, R, 0, Math.PI * 2)
    ctx.fill()

    ctx.restore()

    ctx.beginPath()
    ctx.arc(cx, cy, R, 0, Math.PI * 2)
    ctx.strokeStyle = "rgba(255,255,255,0.12)"
    ctx.lineWidth = 1.5
    ctx.stroke()

    angleRef.current += 0.006
    frameRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    frameRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(frameRef.current)
  }, [draw])

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative z-10 transition-all duration-500 hover:scale-110 active:scale-90"
    >
      <canvas ref={canvasRef} className="rounded-full block" />
      <span className="sr-only">Open social links</span>
    </button>
  )
}
