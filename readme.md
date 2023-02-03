# TipTap Unique ID extension

An extension that enables unique IDs for nodes. A JS fork of the original MIT licensed [`extension-unique-id`](https://www.npmjs.com/package/@tiptap/extension-unique-id) that has since been abandoned in favour of a closed source internal version.

## Installation

```sh
npm i tiptap-unique-id
```

## Usage

```js
import { Editor } from "@tiptap/core";
// ... extensions
import UniqueId from "tiptap-unique-id";

new Editor({
  element: document.body,
  extensions: [
    // ... extensions
    UniqueId.configure({
      attributeName: "id",
      types: ["paragraph", "heading", "orderedList", "bulletList", "listItem"],
      createId: () => window.crypto.randomUUID(),
    }),
  ],
})
```

This package is ESM only, transpiled to ES2019.

### Configuration

| Parameter   | Default                            | Description                                                                                                                                                                                                                              |
| ----------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attribute` | `"id"`                             | The attribute to assign the value of the id to                                                                                                                                                                                           |
| `types`     | `[]`                               | A list of node types that should receive ids. The exact list you need will depend on your requirements and tiptap extensions you use.                                                                                                    |
| `createId`  | `() => window.crypto.randomUUID()` | A function, returning a different string everytime it is called. Instead of UUIDv4 created by default, [`nanoid`](https://www.npmjs.com/package/nanoid), [`hyperid`](https://www.npmjs.com/package/hyperid) or other options can be used |
