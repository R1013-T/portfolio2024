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
            ? 'text-[32px]'
            : type === 'h2'
              ? 'text-[24px] py-3.5'
              : type === 'h3'
                ? 'text-[21px] py-3'
                : 'text-[17px] leading-7 pb-2 text-foreground/80',
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Text.displayName = 'Text'

export { Text }
