import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Code from '@/components/ui/code'
import { Text } from '@/components/ui/text'
import { getArticle } from '@/server/data/article'

export default async function BlogDetail({
  params: { lang, blog_id },
}: {
  params: {
    lang: string
    blog_id: string
  }
}) {
  const article = await getArticle(blog_id)

  return (
    <article className="mt-8 mb-20 px-4 max-w-xl mx-auto">
      <Link
        href={`/${lang}/blog`}
        className="fixed z-40 top-5 right-1/2 translate-x-1/2 p-2 rounded-full border bg-primary/10 backdrop-blur-sm"
      >
        <X className="w-5 h-5" />
      </Link>
      <h1 className="mt-20 text-3xl leading-10">{article.title}</h1>
      <p className="mt-1 mb-3">{article.date}</p>
      <div>
        {article.items.map((item, index) => {
          switch (item.type) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'p':
              return (
                <Text key={index} type={item.type}>
                  {item.text}
                </Text>
              )
            case 'img':
              return <Image key={index} src={item.src} alt="Image" />
            case 'code':
              return <Code key={index} {...item} />
            case 'html':
              return (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item.html }}
                />
              )
            default:
              return null
          }
        })}
      </div>
    </article>
  )
}
