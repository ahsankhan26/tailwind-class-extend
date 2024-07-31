# tailwind-class-extend

A TailwindCSS plugin for additional utility classes.

## Installation

Ensure that Node.js and Tailwind CSS are installed.

1. Install `tailwind-class-extend` using npm or yarn

```bash
npm install tailwind-class-extend -D
```

Or

```bash
yarn add tailwind-class-extend -D
```

2. Add `tailwind-class-extend` as a plugin in `tailwind.config.js` file

```js
module.exports = {
  // ...
  plugins: [require('tailwind-class-extend')],
}
```

## Class Options

| Class                  | Description                                         |
| ---------------------- | --------------------------------------------------- |
| flex-center            | flex items-center justify-center                    |
| flex-between           | flex items-center justify-between                   |
| flex-start             | flex items-center justify-start                     |
| flex-end               | flex items-center justify-end                       |
| flex-around            | flex items-center justify-around                    |
| flex-evenly            | flex items-center justify-evenly                    |
| flex-column            | flex flex-col                                       |
| word-break             | word-break: break-word;                             |
| word-break-all         | word-break: break-all;                              |
| min-h-inherit          | min-height: inherit;                                |
