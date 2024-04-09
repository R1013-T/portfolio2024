import { ScrollArea } from '@/components/ui/scroll-area'

import ComputerGrid from './_components/grid/computer'
import MobileGrid from './_components/grid/mobile'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <ScrollArea className="h-dvh w-full">
        <ComputerGrid />
        <MobileGrid />
      </ScrollArea>
    </main>
  )
}
