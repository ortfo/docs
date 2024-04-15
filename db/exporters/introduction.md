
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

Here's an example configuration for the [FTP exporter](./builtin.md#sftp)

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

### Uploading

Most of the [built-in exporters](/db/exporters/builtin.md) provide functionnality to upload the generated database.json file to various services, including:

[Cloud services](./builtin.md#cloud-services-google-drive-dropbox-etc)
: most cloud services (Google Drive, Dropbox, etc.)

Remote servers
: via [SSH](./builtin.md#ssh),
: via [FTP or SFTP](./builtin.md#sftp)

[Git repositories](./builtin.md#git)
: by cloning a repo, comitting the database.json to it and pushing the commit

### Exporting to other formats

ortfo/db ships with a rudimentary [SQL exporter](./builtin.md#sql) to fill up a "real" database

## Running your own commands

If you don't want to write (and maybe publish) your own exporter, you can directly declare one in your configuration file by using the [Custom exporter](./custom.md)

## Creating an exporter

See [the development guide](./development.md) for more information on how to create your own exporter.
