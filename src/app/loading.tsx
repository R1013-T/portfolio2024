import Image from 'next/image'

export default function Loading() {
  return (
    <section className="h-dvh w-full flex justify-center items-center">
      <Image src="/icon.webp" alt="Loading..." width={100} height={100} />
    </section>
  )
}
