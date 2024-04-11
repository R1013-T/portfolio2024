import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="h-dvh w-full flex flex-col gap-4 justify-center items-center">
      <div className="text-center">
        <p>
          404 <br />
          Not Found
        </p>
      </div>
      <Image src="/icon.webp" alt="RYU" width={100} height={100} />
      <Link href="/ja" className="underline">
        Back to Home
      </Link>
    </section>
  )
}
