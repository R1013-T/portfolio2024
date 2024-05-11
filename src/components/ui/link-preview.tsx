import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { unfurl } from 'unfurl.js'

type Metadata = Awaited<ReturnType<typeof unfurl>>

export default async function LinkPreviewWidget({ url }: { url: string }) {
  let metadata: Metadata

  try {
    metadata = await unfurl(url)
  } catch (_) {
    return <PlainLink url={url} />
  }

  const imageURL =
    metadata.open_graph.images?.[0].url ||
    metadata.twitter_card?.images?.[0].url

  return (
    <>
      {imageURL ? (
        <div className="flex rounded mt-2 mb-3 bg-card border items-center gap-3 w-full p-3 relative">
          {imageURL && (
            <div>
              <div className="aspect-square border relative w-20 shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={imageURL}
                  unoptimized
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="flex-1 overflow-hidden">
            <h1 className="font-bold mb-2 truncate leading-none">
              <a href={url} target="_blank">
                {metadata.open_graph.title || metadata.title}
                <span className="absolute inset-0" />
              </a>
            </h1>
            <p className="text-muted-foreground text-sm truncate">
              {metadata.open_graph.description}
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2 leading-none truncate">
              {url}
            </p>
          </div>
        </div>
      ) : (
        <PlainLink url={url} />
      )}
    </>
  )
}

function PlainLink({ url }: { url: string }) {
  return (
    <a href={url} className="text-muted-foreground text-sm" target="_blank">
      {url}
      <ArrowUpRight className="inline ml-0.5" size={14} />
    </a>
  )
}
