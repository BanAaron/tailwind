<script lang="ts">
	import { parse } from 'marked';

	let markdown: string = `# Hello, World
    My name is Aaron.
    - bullet point
    `;
</script>

<main>
	<div class="preview">{@html parse(markdown)}</div>
</main>
