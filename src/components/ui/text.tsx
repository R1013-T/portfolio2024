import React from 'react'

import { cn } from '@/lib/utils'

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadElement | HTMLParagraphElement> {
  type?: 'h1' | 'h2' | 'h3' | 'p'
}

const Text = React.forwardRef<HTMLHeadingElement, TextProps>(
  ({ className, type = 'p', ...props }, ref) => {
    const Comp = type
    return (
      <Comp
        className={cn(
          className,
          type === 'h1'
            ? 'text-xl leading-10 pt-7'
            : type === 'h2'
              ? 'text-lg leading-9 pt-6'
              : type === 'h3'
                ? 'text-base leading-8'
                : 'text-sm leading-6 text-foreground/80',
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = 'Text'

export { Text }
