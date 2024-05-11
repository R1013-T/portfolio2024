import './style.css'

import { X } from 'lucide-react'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import Code from '@/components/ui/code'
import LinkPreviewWidget from '@/components/ui/link-preview'
import { Text } from '@/components/ui/text'
import { createClient } from '@/lib/supabase/server'
import type { Article } from '@/types/article'

import QiitaLogo from './assets/qiita-icon.png'

export default async function BlogDetail({
  params: { lang, blog_id },
}: {
  params: {
    lang: string
    blog_id: string
  }
}) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase
    .from('articles')
    .select()
    .filter('id', 'eq', blog_id)
  if (!data || data.length === 0) {
    return redirect(`/${lang}/blog`)
  }

  const article = data[0] as Article | null
  if (!article) {
    return redirect(`/${lang}/blog`)
  }

  return (
    <article className="mt-8 mb-20 px-4 w-full max-w-xl mx-auto">
      <Link
        href={`/${lang}/blog`}
        className="fixed z-40 top-5 right-1/2 translate-x-1/2 p-2 rounded-full border bg-primary/10 backdrop-blur-sm"
      >
        <X className="w-5 h-5" />
      </Link>
      <div className="mt-20 mb-3 flex justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl leading-10">{article.title}</h1>
          <p className="mt-1 text-sm text-foreground/70">{article.date}</p>
        </div>
        <div className="h-8 w-8">
          {article.qiita && (
            <Link
              href={article.qiita}
              className="cursor-pointer"
              target="_blank"
            >
              <Image src={QiitaLogo} alt="Qiita" />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full">
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
      </div>
    </article>
  )
}
