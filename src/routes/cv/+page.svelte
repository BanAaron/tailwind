<script lang="ts">
	import { browser } from "$app/environment"
	import cv from "$lib/assets/aaron_barratt.pdf"

	if (browser) {
		window.open(cv)
	}
</script>
