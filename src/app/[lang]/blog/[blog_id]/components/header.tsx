import { Text } from '@/components/ui/text'
import type { Article } from '@/types/article'

export default function BlogHeader({ article }: { article: Article }) {
  const tags = article.tag_map.map((tag) => tag.tags.name)

  return (
    <section className="mt-20 mb-3 flex flex-col md:flex-row gap-3 justify-between">
      <div className="flex flex-col gap-2">
        <Text type="h1">{article.title}</Text>
        <Text type="p">{article.description}</Text>
        <div className="flex gap-1">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="border px-3 rounded py-2 text-xs text-foreground/70"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="mt-1 text-sm text-foreground/70">{article.date}</p>
      </div>
    </section>
  )
}
