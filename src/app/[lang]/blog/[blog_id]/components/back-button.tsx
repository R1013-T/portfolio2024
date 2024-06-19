import { X } from 'lucide-react'
import Link from 'next/link'

export default function BackButton({ lang }: { lang: string }) {
  return (
    <aside className="fixed z-40 top-5 right-1/2 translate-x-1/2 p-2 rounded-full border bg-primary/10 backdrop-blur-sm">
      <Link href={`/${lang}/blog`}>
        <X className="w-5 h-5" />
      </Link>
    </aside>
  )
}
