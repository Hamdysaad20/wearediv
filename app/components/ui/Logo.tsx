interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const Logo = ({ 
  width = 28, 
  height = 28, 
  color = "white",
  className = "mr-2" 
}: LogoProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 96 92" 
    preserveAspectRatio="xMidYMid meet"
    className={className}
  >
    <g    
      transform="translate(0,92) scale(0.05,-0.05)" 
      fill={color} 
      stroke="none"
    >
      <path d="M420 860 l0 -680 680 0 680 0 0 680 0 680 -680 0 -680 0 0 -680z m680 280 c0 -253 -5 -249 152 -129 265 204 353 269 367 269 14 0 13 -515 -1 -528 -31 -29 -500 -372 -508 -372 -6 0 -10 99 -10 220 0 265 17 262 -273 42 -130 -99 -241 -175 -248 -171 -7 4 -12 121 -9 260 l3 253 248 188 c137 103 256 188 264 188 8 0 15 -99 15 -220z" />
    </g>
  </svg>
)