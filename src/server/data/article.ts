import type { Article } from '@/types/article'

export const getArticles = async (): Promise<Article[]> => {
  const articles: Article[] = [
    {
      id: '1',
      title: 'Article 1',
      items: [
        {
          text: 'This is a heading 1',
          type: 'h1',
        },
        {
          text: 'Qui labore incididunt aliquip pariatur laboris magna adipisicing dolor. Commodo reprehenderit voluptate mollit culpa et dolore ex ea duis eu. Tempor deserunt sunt elit ipsum duis fugiat laboris duis adipisicing ut. Dolore dolor velit ex excepteur laborum ipsum duis ut minim irure.',
          type: 'p',
        },
        {
          text: 'This is a heading 2',
          type: 'h2',
        },
        {
          text: 'This is a heading 3',
          type: 'h3',
        },
        {
          code: `const hello = () => {\n  console.log('Hello!')\n}`,
          language: 'typescript',
          file: 'hello.ts',
          type: 'code',
        },
      ],
      date: '2021-01-01',
    },
    {
      id: '2',
      title: 'Article 2',
      items: [
        {
          text: 'This is a title',
          type: 'h1',
        },
        {
          text: 'This is a paragraph',
          type: 'p',
        },
      ],
      date: '2021-01-02',
    },
    {
      id: '3',
      title: 'Article 3',
      items: [
        {
          text: 'This is a heading 1',
          type: 'h1',
        },
        {
          text: 'This is a paragraph',
          type: 'p',
        },
        {
          text: 'This is a heading 2',
          type: 'h2',
        },
        {
          text: 'This is a heading 3',
          type: 'h3',
        },
        {
          code: 'console.log("Hello, world!")',
          type: 'code',
        },
      ],
      date: '2021-01-01',
    },
    {
      id: '4',
      title: 'Article 1',
      items: [
        {
          text: 'This is a heading 1',
          type: 'h1',
        },
        {
          text: 'This is a paragraph',
          type: 'p',
        },
        {
          text: 'This is a heading 2',
          type: 'h2',
        },
        {
          text: 'This is a heading 3',
          type: 'h3',
        },
        {
          code: 'console.log("Hello, world!")',
          type: 'code',
        },
      ],
      date: '2021-01-01',
    },
    {
      id: '5',
      title: 'Article 2',
      items: [
        {
          text: 'This is a title',
          type: 'h1',
        },
        {
          text: 'This is a paragraph',
          type: 'p',
        },
      ],
      date: '2021-01-02',
    },
    {
      id: '6',
      title: 'Article 3',
      items: [
        {
          text: 'This is a heading 1',
          type: 'h1',
        },
        {
          text: 'This is a paragraph',
          type: 'p',
        },
        {
          text: 'This is a heading 2',
          type: 'h2',
        },
        {
          text: 'This is a heading 3',
          type: 'h3',
        },
        {
          code: 'console.log("Hello, world!")',
          type: 'code',
        },
      ],
      date: '2021-01-01',
    },
  ]

  return articles
}

export const getArticle = async (id: string): Promise<Article> => {
  const articles = await getArticles()
  const article = articles.find((article) => article.id === id)

  if (!article) {
    throw new Error('Article not found')
  }

  return article
}
