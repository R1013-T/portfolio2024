import { redirect } from 'next/navigation'

import { getBlogById } from '@/server/data/blog'

import BackButton from './components/back-button'
import BlogContent from './components/content'
import BlogHeader from './components/header'

export async function generateMetadata({
  params: { lang, blog_id },
}: {
  params: {
    lang: string
    blog_id: string
  }
}) {
  const article = await getBlogById(blog_id)
  if (!article) {
    return redirect('/blog')
  }

  return {
    title: {
      default: article.title,
    },
    description: article.description || 'RYUブログ',
    keywords: article.tag_map.map((tag) => tag.tags.name),
  }
}

export default async function BlogDetail({
  params: { lang, blog_id },
}: {
  params: {
    lang: string
    blog_id: string
  }
}) {
  const article = await getBlogById(blog_id)
  if (!article) {
    return redirect(`/${lang}/blog`)
  }

  return (
    <article className="mt-8 mb-20 px-4 w-screen max-w-xl mx-auto">
      <BackButton lang={lang} />
      <BlogHeader article={article} />
      <BlogContent article={article} />
    </article>
  )
}
