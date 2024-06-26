import Image from 'next/image'

export default function Loading() {
  return (
    <section className="h-dvh w-full flex flex-col gap-3 justify-center items-center">
      <Image src="/icon.webp" alt="Loading..." width={100} height={100} />
      <p>当サイトをご覧いただきありがとうございます！</p>
    </section>
  )
}
