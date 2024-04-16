<script setup lang="ts">
import type { JSONSchema7 } from 'json-schema';

const props = defineProps({
	schema: Object,
	type: String,
	headings: Number,
	pick: {
		type: Array,
		default: () => [],
	},
})

function selectedType(schema: JSONSchema7) {
	return schema["$defs"]![props.type ?? schema['$ref']!.replace('#/$defs/', '')]! as JSONSchema7
}

function arrayItemsTypeTitle(items: JSONSchema7['items']) {
	if (!items) return ''
	if (typeof items === 'boolean') return ''
	if (!('$ref' in items)) return ''
	if (!items.$ref) return ''
	const typename = items.$ref.replace('#/$defs/', '')
	const lowertitle = typename.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase()
	return lowertitle.charAt(0).toUpperCase() + lowertitle.slice(1)
}

function slug(typename: string) {
	return typename.toLowerCase().trim().replace(/ /g, '-')
}

function selectedTypeFields(schema: JSONSchema7 | undefined) {
	if (!schema) return []
	return Object.entries(selectedType(schema).properties ?? []).filter(([name, typ]) => {
		if (props.pick.length === 0) return true
		return props.pick.includes(name)
	})
}
</script>

<template>
	<template v-if="headings" v-for="[name, typ] in selectedTypeFields(props.schema)">
		<!-- Can't use <component> with vitepress' default theme here -->
		<h3 v-if="headings === 3" tabindex="-1" :id="slug(name)">{{ name }}
			<a class="header-anchor" :href="'#' + slug(name)" :aria-label="`Permalink to &quot;${name}&quot;`">​</a>
		</h3>
		<h4 v-else-if="headings === 4" tabindex="-1" :id="slug(name)">{{ name }}
			<a class="header-anchor" :href="'#' + slug(name)" :aria-label="`Permalink to &quot;${name}&quot;`">​</a>
		</h4>
		<h5 v-else-if="headings === 5" tabindex="-1" :id="slug(name)">{{ name }}
			<a class="header-anchor" :href="'#' + slug(name)" :aria-label="`Permalink to &quot;${name}&quot;`">​</a>
		</h5>
		<h6 v-else-if="headings === 6" tabindex="-1" :id="slug(name)">{{ name }}
			<a class="header-anchor" :href="'#' + slug(name)" :aria-label="`Permalink to &quot;${name}&quot;`">​</a>
		</h6>

		<template v-if="typ !== false && typ !== true">
			<p>{{ typ.description || 'TODO: Documentation' }}</p>
			<p v-if="arrayItemsTypeTitle(typ.items)">
				List of <a :href="'#' + slug(arrayItemsTypeTitle(typ.items))">{{ arrayItemsTypeTitle(typ.items)
					}}s</a>
			</p>
		</template>
	</template>
	<template v-else>
		<dl>
			<template v-for="[name, typ] in selectedTypeFields(props.schema)">
				<dt class="technical" :id="slug(`${props.type ?? ''} ${name}`)">
					{{ name }}
					<a class="header-anchor" :href="`#${slug(`${props.type ?? ''} ${name}`)}`"
						:aria-label="`Permalink to &quot;${name}&quot;`">​</a>
				</dt>
				<template v-if="typ !== false && typ !== true">
					<dd>
						{{ typ.description || 'TODO: Documentation' }}
					</dd>
					<dd>
						<template v-if="arrayItemsTypeTitle(typ.items)">
							List of <a :href="'#' + slug(arrayItemsTypeTitle(typ.items))">{{
								arrayItemsTypeTitle(typ.items)
							}}s</a>
						</template>
					</dd>

				</template>
			</template>
		</dl>
	</template>
</template>

<style>
dt {
	position: relative;
}

dt:hover .header-anchor::before {
	opacity: 1;
}
</style>
