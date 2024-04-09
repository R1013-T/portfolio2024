import { ScrollArea } from '@/components/ui/scroll-area'

import ComputerGrid from './_components/grid/computer'
import MobileGrid from './_components/grid/mobile'

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang

  return (
    <main className="overflow-hidden">
      <ScrollArea className="h-dvh w-full">
        <ComputerGrid lang={lang} />
        <MobileGrid />
      </ScrollArea>
    </main>
  )
}
