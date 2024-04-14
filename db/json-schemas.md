# JSON Schemas

ortfo/db exports [JSON Schemas](https://json-schema.org/) for the different data files it uses.

These schemas serve as both validation when running the program, and as a way to provide a nice [auto-complete experience in your editor](#ide-integrations), provided that it supports JSON schemas.

## Getting the schemas

### Locally

See [`ortfodb schemas`](/db/commands/schemas.md)

### Over the network

The schemas are all available on the repository in the `schemas/` directory:

[schemas/configuration.schema.json](https://raw.githubusercontent.com/ortfo/db/main/schemas/configuration.schema.json)
: The schema for the `ortfodb.yaml` [configuration file](/db/configuration.md)

[schemas/database.schema.json](https://raw.githubusercontent.com/ortfo/db/main/schemas/database.schema.json)
: The schema for the `database.json` file (see [Database format](/db/database-format.md))

[schemas/tags.schema.json](https://raw.githubusercontent.com/ortfo/db/main/schemas/tags.schema.json)
: The schema for the [tags repository](/db/tags.md)

[schemas/technologies.schema.json](https://raw.githubusercontent.com/ortfo/db/main/schemas/technologies.schema.json)
: The schema for the [technologies repository](/db/technologies.md)

#### Version pining

You can always get the JSON schema for a specific version of ortfo/db by using the tag name instead of `main` in the URL. For example, to get the database JSON schema for version `v0.1.0`, you would use the following URL:

<center style="margin-bottom: 2em">
<span style="color:gray">https://raw.githubusercontent.com/ortfo/db/</span><strong>v0.1.0</strong><span style="color:gray">/schemas/database.schema.json</span>
</center>

#### Shorthand URL for the latest version

Instead of the long raw.githubusercontent.com URL, you can use the following shorthand URL to get the latest version of the schema:

<center style="margin-bottom: 2em">
https://<strong>ortfo.org/<em style="color: var(--vp-c-brand-1)">resource name</em>.schema.json</strong>
</center>

::: info
In the future, you'll be able to specify a version with that shorthand URL too
:::

## Using it in your editor

A motivating example, for the [tags repository](/db/tags.md) file:

```yaml
# yaml-language-server: $schema=https://ortfo.org/tags.schema.json

- singular: website
  plural: websites
  aliases: site # expected array of strings, got string // [!code error]
```

RedHat develops a [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) for YAML that [includes JSON Schema support](https://github.com/redhat-developer/yaml-language-server?tab=readme-ov-file#language-server-settings), so most IDEs that support LSPs should be able to support this feature.

### On files directly

You can add a magic comment at the top of your file to associate it with a JSON schema [[docs]](https://github.com/redhat-developer/yaml-language-server?tab=readme-ov-file#using-inlined-schema):

```yaml{1}
# yaml-language-server: $schema=https://ortfo.org/configuration.schema.json

make thumbnails:
  enabled: true
  ...
```

### Associating by filename

You can associate [glob patterns](<https://en.wikipedia.org/wiki/Glob_(programming)>) of YAML filenames with JSON schemas in your editor settings, [see the documentation](https://github.com/redhat-developer/yaml-language-server?tab=readme-ov-file#associating-a-schema-to-a-glob-pattern-via-yamlschemas)

## IDE support

VSCode
: [RedHat YAML Extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)

Neovim
: [coc-yaml](https://github.com/neoclide/coc-yaml), a [CoC](https://github.com/neoclide/coc.nvim) plugin
: Any plugin, such as [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) should also do the trick

_Other editors_
: Please [contribute to the docs](https://github.com/ortfo/website/edit/main/db/json-schemas.md)
