<script setup>
  import { data as commands } from './[subcommand].data.js'
</script>

<main v-html="
  commands.find(command => command.url.endsWith(`ortfodb_${$params.subcommand.replaceAll('-', '_')}`)).html
">
</main>
