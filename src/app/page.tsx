import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Top() {
  redirect('/ja')

  return (
    <main>
      <Link href="/ja">ja</Link>
      <Link href="/en">en</Link>
    </main>
  )
}
