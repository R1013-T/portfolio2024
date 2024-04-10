import Image from 'next/image'

import HobbyImage from './assets/hobby.webp'

export default async function HobbyItem() {
  return (
    <Image src={HobbyImage} alt="Hobby" className="h-1/2 w-1/2 opacity-60" />
  )
}
