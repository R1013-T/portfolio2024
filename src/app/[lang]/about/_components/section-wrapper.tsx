export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode
  id: string
}) {
  return (
    <section id={id} className="pt-16">
      {children}
    </section>
  )
}
