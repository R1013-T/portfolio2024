export type Article = {
  id: string
  title: string
  items: ArticleItem[]
  date: string
}

export type ArticleItem =
  | ArticleTextItem
  | ArticleImageItem
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
