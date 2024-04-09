export default function MarbleBackground() {
  return (
    <div className="absolute -z-10 top-o left-0 w-full h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-full opacity-20 dark:opacity-10"
      >
        <defs>
          <filter id="filter_texture">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.028"
              stitchTiles="stitch"
              numOctaves="7"
              result="noise"
            ></feTurbulence>
            <feDiffuseLighting
              in="noise"
              lighting-color="hsl(0, 0%, 100%)"
              surfaceScale="3"
            >
              <feDistantLight
                id="distLight"
                azimuth="250"
                elevation="60"
              ></feDistantLight>
            </feDiffuseLighting>
          </filter>
        </defs>

        <rect filter="url(#filter_texture)" width="100%" height="100%"></rect>
      </svg>
    </div>
  )
}
