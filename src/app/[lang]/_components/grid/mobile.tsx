import { ScrollArea } from '@/components/ui/scroll-area'

export default function MobileGrid() {
  return (
    <article className="overflow-hidden md:hidden p-4">
      <div className="h-dvh border border-blue-400">a</div>
      <div className="h-dvh border border-green-400">b</div>
      <div className="h-dvh border border-yellow-400">c</div>
    </article>
  )
}
