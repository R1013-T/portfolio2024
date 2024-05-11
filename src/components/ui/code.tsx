'use client'

import { useTheme } from 'next-themes'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import {
  atomOneLight,
  tomorrowNight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

import CopyButton from '../common/copy-button'

export default function Code({
  code,
  file,
  language,
}: {
  code: string
  file?: string
  language?: string
}) {
  const { theme } = useTheme()

  return (
    <div className="text-sm rounded overflow-hidden mt-2 mb-3 relative border">
      <div className="absolute top-2 left-3 right-2 flex  justify-between">
        <p className="text-xs text-primary/70">{file}</p>
        <CopyButton value={code} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === 'light' ? atomOneLight : tomorrowNight}
        customStyle={{
          paddingTop: 30,
          paddingBottom: 17,
          paddingRight: 17,
          paddingLeft: 17,
        }}
      >
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}
