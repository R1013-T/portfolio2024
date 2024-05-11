export type Article = {
  id: string
  title: string
  content: ArticleItem[]
  date: string
  qiita?: string
}

export type ArticleItem =
  | ArticleTextItem
  | ArticleImageItem
  | ArticleLinkItem
  | ArticleCodeItem
  | ArticleHtmlItem

export type ArticleTextItem = {
  text: string
  type: 'h1' | 'h2' | 'h3' | 'p'
}

export type ArticleImageItem = {
  src: string
  type: 'img'
}

export type ArticleLinkItem = {
  url: string
  type: 'link'
}

export type ArticleCodeItem = {
  code: string
  language?: string
  file?: string
  type: 'code'
}

export type ArticleHtmlItem = {
  html: string
  type: 'html'
}
