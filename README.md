[Read Docs](https://briklab-docs.pages.dev/packages/parsee/introduction)
[Github Repository](https://github.com/Kryft-Studios/parsee)

# @briklab/parsee

`@briklab/parsee` parses JavaScript/TypeScript source code and returns structured metadata for all declarations.

## Install

Follow the [common installation tutorial](https://briklab.pages.dev/packages/common-installation-tutorial)

## API

- **Function**: [`parseWithTsMorph`](https://briklab.pages.dev/packages/parsee/functions/parseWithTsMorph)
- **Constants**: [`parser`](https://briklab.pages.dev/packages/parsee/constants/parser), [`_parser`](https://briklab.pages.dev/packages/parsee/constants/_parser)
- **Types**: [`ParsedItem`](https://briklab.pages.dev/packages/parsee/types/parseditem), [`ParseOptions`](https://briklab.pages.dev/packages/parsee/types/parseoptions), and related item/member types

## Quick Start

```ts
import { parseWithTsMorph } from "@briklab/parsee";

const source = `
export class User {
  constructor(public id: string) {}
  greet(name: string) { return "Hello " + name; }
}
`;

const items = parseWithTsMorph(source, "user.ts", {
  Name: "include",
  Type: "include",
  Members: "include"
});

console.log(items);
```