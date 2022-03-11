# github-repos-search

Convert a nested array into a single array

## Installation

```js
# using npm
npm install dev-flatten

# using yarn
yarn add dev-flatten
```

## Usage

```js
# using require
const { flatten } = require('dev-flatten');

# using import
import { flatten } from 'dev-flatten';
```

## Example

```js
const arr = [1, 2, 3, [1, 2], [1, [2, [2, 3]]]];
console.log(flatten(arr));
output = [1, 2, 3, 1, 2, 1, 2, 2, 3];
```
