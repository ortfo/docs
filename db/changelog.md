---
editLink: false
---


<script setup>
  import { data } from './changelog.data.js'
  console.log(data)
</script>

## Unreleased

See [the CHANGELOG on GitHub](https://github.com/ortfo/db/blob/main/CHANGELOG.md) for upcoming changes.

<main v-html="data[0].html"></main>
