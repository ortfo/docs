---
next:
  text: Uploading with exporters
---

# Exporters

ortfo/db includes a plugin-like system that allows you to run shell commands at various stages of the build process.

## Usage

To enable and configure exporters, add an `exporters` field to your `ortfodb.yaml` configuration file:

```yaml
...
  repository: path/to/tags.yaml

exporters:  // [!code focus]
  (name of the exporter):  // [!code focus]
    exporter-specific configuration...  // [!code focus]
    # available to all exporters.  // [!code focus]
    # shows more logs about the exporter, useful for debugging  // [!code focus]
    verbose: true  // [!code focus]
```

### Example

Here's an example configuration for the [FTP exporter](./uploading.md#sftp)

```yaml
exporters:
  ftp:
    host: example.com
    user: username
    password: password
    path: /path/to/remote/folder
```

## Built-in exporters

::: warning
For now, most of the built-in exporters do not work on Windows
:::

<!-- ::: tip New in v1.4.0 (not out yet)

Run [`ortfodb exporters list`](/db/commands/exporters-list) to get the list of all built-in exporters.

Run [`ortfodb exporters doc <name>`](/db/commands/exporters-doc) to get help on a specific exporter.

::: -->

### Uploading

Most built-in exporters provide functionnality to upload the generated database.json file in various ways. See [Uploading with exporters](/db/exporters/uploading.md)

### Static site generators

ortfo/db provides exporters to more conviently build your portfolio using some of the most popular static site generators. See [Static site generators](./static-site-generators)

### Exporting to other formats

ortfo/db ships with a rudimentary [SQL exporter](./formats.md#sql) to fill up a "real" database

### Other things

See [Other exporters](./misc.md).

## Running your own commands

If you don't want to write (and maybe publish) your own exporter, you can directly declare one in your configuration file by using the [Custom exporter](./custom.md)

## Creating an exporter

See [the development guide](./development.md) for more information on how to create your own exporter.
