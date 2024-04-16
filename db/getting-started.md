# Getting started
## Installation
### Binaries

You can download the latest binaries for Linux, MacOS and Windows from the [releases page](https://github.com/ortfo/db/releases).

### Using `go`

```bash
go install github.com/ortfo/db/cmd@latest
```

### Package managers

::: tip
Package files are also available to download from [Github Releases](https://github.com/ortfo/db/releases), in case the package manager's repositories are not up-to-date enough
:::

::: warning
This is my first time packaging a program to practically all package managers. I'm not familiar with most of them. If the installation does not work, please [open an issue](https://github.com/ortfo/db/issues/new).
:::

#### Linux

::: warning About integrity checks
Checksums are not calculated correctly for the moment, I don't know why
:::

::: code-group

```bash [Arch Linux (AUR)]
# skipping integrity checks since they are not calculated correctly for the moment
paru -S ortfodb-bin --mflags --skipinteg
```

```bash [Ubuntu, Debian]
echo "deb [trusted=yes] https://deb.ortfo.org/ /" | sudo tee /etc/apt/sources.list.d/ortfo.list
sudo apt update
sudo apt install ortfodb
```

```bash [Fedora]
# might not work, the packaging infra i'm using only talks about yum...
sudo dnf -y install dnf-plugins-core
sudo dnf config-manager --add-repo https://rpm.ortfo.org/
sudo dnf install ortfodb
# waiting on https://github.com/goreleaser/goreleaser/issues/3136 to add it to COPR
```

```bash [Alpine Linux]
# not available yet
# look for a .apk file in the github releases
# apk add ortfodb
```

```bash [Termux]
# not available yet
# look for a .termux.deb file in the github releases
# pkg install ortfodb
# using Ubuntu's install instructions may work, idk
```

```bash [Others: with Homebrew]
# on its own tap for the moment
brew tap ortfo/brew-ortfodb/ortfodb
brew install ortfodb
```

:::

#### MacOS

::: code-group

```bash [Homebrew]
# on its own tap for the moment
brew tap ortfo/brew-ortfodb/ortfodb
brew install ortfodb
```

:::

#### Windows

::: code-group

```powershell [WinGet]
# To be submitted, not yet available
# winget install ortfo.db
```

```powershell [Scoop]
# not on official repos yet
scoop bucket add https://github.com/ortfo/scoop-ortfodb
scoop install ortfodb
```

```powershell [Chocolatey]
# not yet avaiable: needs to be on windows to build the package…
```

:::

### Building from source

#### Requirements

- [Go](https://go.dev)
- [Just](https://just.systems): a modern alternative to Makefiles[^1]. See [Just's docs on installation](https://github.com/casey/just?tab=readme-ov-file#installation)

#### Steps

1. Clone the repository: `git clone https://github.com/ewen-lbh/portfoliodb`
2. `cd` into it: `cd portfoliodb`
3. Compile & install in `~/.local/bin/` `just install`... or simply build a binary to your working directory: `just build`.

[^1]: One big advantage of Just is that it works painlessly on Windows.
