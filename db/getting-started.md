---
next:
    link: /db/your-first-description-file
---

# Getting started
## Installation
### Binaries

You can download the latest binaries from the [releases page](https://github.com/ortfo/db/releases).

### Using `go`

```bash
go install github.com/ortfo/db/cmd@latest
```

### Building from source

#### Requirements

- [Go](https://go.dev)
- [Just](https://just.systems): a modern alternative to Makefiles[^1]. See [Just's docs on installation](https://github.com/casey/just?tab=readme-ov-file#installation)

#### Steps

1. Clone the repository: `git clone https://github.com/ewen-lbh/portfoliodb`
2. `cd` into it: `cd portfoliodb`
3. Compile & install in `~/.local/bin/` `just install`... or simply build a binary to your working directory: `just build`.

[^1]: One big advantage of Just is that it works painlessly on Windows.
