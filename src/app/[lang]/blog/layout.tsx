import './style.css'

import { ScrollArea } from '@/components/ui/scroll-area'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="overflow-hidden">
      <ScrollArea className="h-dvh w-full">{children}</ScrollArea>
    </main>
  )
}
