<script lang="ts">
	import { parse } from "marked"

	export let data
</script>

<div class="bg-pink-600">
	<div class="preview">{@html parse(data.md)}</div>
</div>
