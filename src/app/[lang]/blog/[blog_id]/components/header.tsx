import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Text } from '@/components/ui/text'
import type { Article } from '@/types/article'

import QiitaLogo from '../assets/qiita-icon.png'

export default function BlogHeader({ article }: { article: Article }) {
  return (
    <section className="mt-20 mb-3 flex flex-col md:flex-row gap-3 justify-between">
      <div className="flex flex-col gap-2">
        <Text type="h1">{article.title}</Text>
        <Text type="p">{article.description}</Text>
        <p className="mt-1 text-sm text-foreground/70">{article.date}</p>
      </div>
      <div className="h-8 w-8">
        {article.qiita && (
          <Link href={article.qiita} className="cursor-pointer" target="_blank">
            <Image src={QiitaLogo} alt="Qiita" />
          </Link>
        )}
      </div>
    </section>
  )
}