#!/usr/bin/env node
import fs from 'fs'
import { parseWithTsMorph } from './parser'

function readStdin(): Promise<string> {
  return new Promise((res, rej) => {
    let s = ''
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', (c) => (s += c))
    process.stdin.on('end', () => res(s))
    process.stdin.on('error', rej)
  })
}

async function main() {
  const args = process.argv.slice(2)
  if (args.includes('--version') || args.includes('-v')) {
    try {
      const path = require('path')
      const pkgPath = path.join(process.cwd(), 'package.json')
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
      console.log(pkg.version)
    } catch {
      console.log('0.0.0')
    }
    return
  }

  const fp = args[0]
  let src = ''
  if (!fp || fp === '-') {
    src = await readStdin()
  } else {
    src = fs.readFileSync(fp, 'utf8')
  }

  const out = parseWithTsMorph(src, fp || 'stdin.ts')
  console.log(JSON.stringify(out, null, 2))
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
