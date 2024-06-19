import Image from 'next/image'

import Code from '@/components/ui/code'
import LinkPreviewWidget from '@/components/ui/link-preview'
import { Text } from '@/components/ui/text'
import type { Article } from '@/types/article'

export default function BlogContent({ article }: { article: Article }) {
  return (
    <section className="blog w-full">
      {article.content &&
        article.content.map((item, index) => {
          switch (item.type) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'p':
              return (
                <Text key={index} type={item.type} className="my-3">
                  {item.text}
                </Text>
              )
            case 'img':
              return (
                <Image
                  key={index}
                  src={item.src}
                  alt=""
                  fill
                  className="image my-3"
                />
              )
            case 'link':
              return <LinkPreviewWidget key={index} url={item.url} />
            case 'code':
              return <Code key={index} {...item} />
            case 'html':
              return (
                <div
                  key={index}
                  className="my-3 text-foreground/80 text-sm leading-6"
                  dangerouslySetInnerHTML={{ __html: item.html }}
                />
              )
            default:
              return null
          }
        })}
    </section>
  )
}
