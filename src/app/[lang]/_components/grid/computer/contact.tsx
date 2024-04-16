import React from 'react'

import GitHub from '../../contact/github'
import Instagram from '../../contact/instagram'
import Mail from '../../contact/mail'
import X from '../../contact/x'
import GridItem from '../grid-item'

export default function ContactSection() {
  return (
    <div className="flex gap-2">
      <div className="w-32 lg:w-20 xl:w-32 aspect-square border rounded-3xl">
        <GridItem link={{ href: 'https://github.com/R1013-T', blank: true }}>
          <GitHub />
        </GridItem>
      </div>
      <div className="w-32 lg:w-20 xl:w-32 aspect-square border rounded-3xl">
        <GridItem link={{ href: 'https://twitter.com/rtjob2023', blank: true }}>
          <X />
        </GridItem>
      </div>
      <div className="w-32 lg:w-20 xl:w-32 aspect-square border rounded-3xl">
        <GridItem link={{ href: 'https://twitter.com/rtjob2023', blank: true }}>
          <Instagram />
        </GridItem>
      </div>
      <div className="w-32 lg:w-20 xl:w-32 aspect-square border rounded-3xl">
        <GridItem
          link={{
            href: 'mailto:takahashi.ryunosuke.job@gmail.com',
            blank: true,
          }}
        >
          <Mail />
        </GridItem>
      </div>
    </div>
  )
}
