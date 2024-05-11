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
            ? 'text-2xl leading-10'
            : type === 'h2'
              ? 'text-xl leading-9'
              : type === 'h3'
                ? 'text-lg leading-8'
                : 'text-base leading-7 text-foreground/80',
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = 'Text'

export { Text }
