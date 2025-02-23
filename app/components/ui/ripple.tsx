import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  children?: React.ReactNode;
  fromColor?: string;
  toColor?: string;
  color?: string;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  children,
  fromColor,
  toColor ,
  color,
  ...props
}: RippleProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
          className,
        )}
        {...props}
      >
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-${fromColor} to-${toColor} rounded-full blur opacity-10 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`} />
        {Array.from({ length: numCircles }, (_, i) => {
          const size = mainCircleSize + i * 70;
          const opacity = mainCircleOpacity - i * 0.03;
          const animationDelay = `${i * 0.06}s`;
          const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
          const borderOpacity = 5 + i * 5;

          return (
            <div
              key={i}
              className={`[--i:${i}] absolute animate-ripple rounded-full border bg-gradient-to-r from-${color}-600/40 to-${color}-600/10 shadow-xl`}
              style={
                {
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity,
                  animationDelay,
                  borderStyle,
                  borderWidth: "1px",
                  borderColor: `rgba(219, 39, 119, ${borderOpacity / 100})`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                } as CSSProperties
              }
            />
          );
        })}
      </div>
      {children && <div className="relative">{children}</div>}
    </div>
  );
});

Ripple.displayName = "Ripple";