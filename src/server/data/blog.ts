import { cookies } from 'next/headers'
import { cache } from 'react'

import { createClient } from '@/lib/supabase/server'
import type { Article } from '@/types/article'

export const getBlogById = cache(async (id: string) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase
    .from('articles')
    .select(
      `
      *,
      tag_map (tag_id, tags (name))
      `,
    )
    .filter('id', 'eq', id)

  if (error || !data || !data[0]) {
    return null
  }

  return data[0] as Article
})
