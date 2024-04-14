# Scattered mode

If you prefer, you can store your description.md files alongside your projects themselves, instead of having everything in a single folder. This use case is referred to as "Scattered mode". Use the `--scattered` [global flag](/db/commands/global-options.md) to enable it.

This mode expects you to have all of your projects stored in a single directory (with each project being its own folder in that directory). Then, your description.md file (and potentially other resources like screenshots or photos of the work) live in a `.ortfo` folder that's in the projects' folders.

Take the following example tree:

```directory-tree
database/
├── helloworld
│   ├── logo.png
│   └── description.md
├── resume
│   └── description.md
├── portfolio
│   └── description.md
└── hackernews-clone
    └── description.md
```

Using scattered mode, that tree would instead look like this:

```directory-tree
projects/
├── helloworld
│   ├── .ortfo
│   │   ├── logo.png
│   │   └── description.md
│   └── main.py
├── resume
│   └── .ortfo
│       └── description.md
├── portfolio
│   └── .ortfo
│       └── description.md
└── hackernews-clone
    └── .ortfo
        └── description.md
```

Of course, your actual project files are still where they are and are left untouched (like the main.py file in the above example)
