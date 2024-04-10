import { X } from 'lucide-react'
import Link from 'next/link'

export default async function BackButton({ lang }: { lang: string }) {
  return (
    <Link
      href={`/${lang}`}
      className="fixed z-40 bottom-5 md:bottom-auto md:top-5 right-1/2 translate-x-1/2 p-2 rounded-full border bg-primary/10 backdrop-blur-sm"
    >
      <X className="w-5 h-5" />
    </Link>
  )
}
