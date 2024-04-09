import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import MarbleBackground from './marble-background'

export default function GridItem({
  title,
  link,
  children,
}: {
  title?: string
  link?: {
    href: string
    isDisplay?: boolean
  }
  children: React.ReactNode
}) {
  return (
    <section className="relative h-full w-full border rounded-3xl overflow-hidden shadow dark:shadow-black group">
      <Link
        href={link?.href || ''}
        className={`${link ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <MarbleBackground />
        {title && (
          <h3 className="absolute z-10 top-5 left-5 text-primary/70 tracking-widest overflow-hidden">
            {title}
            <span className="h-px w-full block bg-primary/30 mt-0.5 -translate-x-full ease-out transition duration-300 group-hover:translate-x-0"></span>
          </h3>
        )}
        <div className="h-full w-full flex justify-center items-center">
          {children}
        </div>
        {link?.isDisplay && (
          <Link
            href=""
            className="absolute z-10 bottom-5 right-5 border border-primary/30 rounded-full backdrop-blur"
          >
            <div className="h-8 w-8 relative rounded-full overflow-hidden">
              <ArrowUpRight
                className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 h-5 w-5 text-primary/70 ease-in-out transition duration-300
                group-hover:translate-x-8 group-hover:-translate-y-8"
              />
              <ArrowUpRight
                className="absolute top-1/2 right-1/2 h-5 w-5 text-primary/70 ease-in-out transition duration-300
                -translate-x-8 translate-y-8 group-hover:translate-x-1/2 group-hover:-translate-y-1/2"
              />
            </div>
          </Link>
        )}
      </Link>
    </section>
  )
}
