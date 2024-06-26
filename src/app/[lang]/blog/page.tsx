import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import Link from 'next/link'

import BackButton from '@/components/common/back-button'
import { Text } from '@/components/ui/text'
import { createClient } from '@/lib/supabase/server'
import type { Article } from '@/types/article'

export const metadata: Metadata = {
  title: 'BLOG',
}

export default async function Blog({ params }: { params: { lang: string } }) {
  const lang = params.lang

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase
    .from('articles')
    .select()
    .order('date', { ascending: false })
  if (!data) return null
  const articles = data as Article[]

  return (
    <article className="mt-8 mb-20 px-4 max-w-xl mx-auto">
      <BackButton lang={lang} />
      <h2 className="mb-4 text-xl">RYUブログ</h2>
      <ul className="flex flex-wrap gap-3">
        {articles.map((article) => (
          <li
            key={article.id}
            className="border rounded-md p-5 w-full shadow dark:shadow-black dark:shadow-md"
          >
            <p className="text-xs text-foreground/70">{article.date}</p>
            <h3 className="my-2 text-xl">{article.title}</h3>
            <div className="max-h-44 overflow-hidden relative opacity-80">
              {article.content.map((item, index) => {
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
                  default:
                    return null
                }
              })}
              <div className="h-10 bg-gradient-to-t pointer-events-none from-background sticky bottom-0 inset-x-0" />
            </div>
            <Link
              href={`/${lang}/blog/${article.id}`}
              className="w-full border bg-primary/10 text-primary/80 p-2 mt-2 rounded block text-center
              cursor-pointer transition duration-300 hover:bg-primary/30"
            >
              <p className="text-xs font-bold">もっと読む</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}
