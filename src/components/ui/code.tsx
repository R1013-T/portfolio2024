'use client'

import { useTheme } from 'next-themes'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight'
import {
  atomOneDark,
  atomOneLight,
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
    <div className="text-sm rounded overflow-hidden my-2 relative">
      <div className="absolute top-1.5 left-2 right-2 flex  justify-between">
        <p className="text-xs text-primary/70">{file}</p>
        <CopyButton value={code} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? atomOneDark : atomOneLight}
        customStyle={{ paddingTop: 25 }}
      >
        {String(code).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}
