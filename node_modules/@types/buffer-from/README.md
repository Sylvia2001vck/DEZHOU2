# Installation
> `npm install --save @types/buffer-from`

# Summary
This package contains type definitions for buffer-from (https://github.com/LinusU/buffer-from#readme).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/buffer-from.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/buffer-from/index.d.ts)
````ts
/// <reference types="node" />

declare function bufferFrom(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
declare function bufferFrom(str: string, encoding?: string): Buffer;
declare function bufferFrom(data: readonly any[] | Buffer): Buffer;

export = bufferFrom;

````

### Additional Details
 * Last updated: Mon, 20 Nov 2023 23:36:23 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)

# Credits
These definitions were written by [Nat Burns](https://github.com/burnnat).
