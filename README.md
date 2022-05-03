# VSCode Toggle File

A VSCode Extension for quick toggle between two files

## Screenshot

Single editor

<!-- ![demo1](./images/demo1.gif) -->
<img width="600" src='./images/demo1.gif' />

Multi editors

<!-- ![demo2](./images/demo2.gif) -->
<img width="600" src='./images/demo2.gif' />

## How to use

1. Press `cmd/ctrl + shift + p`, and then search `quick toggle file`

2. You can also set shortcuts in `keybindings.json`. like:

```json
[
  // ...
  {
    "key": "ctrl+e",
    "command": "quickToggleFile.toggle"
  }
]
```