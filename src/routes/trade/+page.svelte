<script>
	import { onMount } from "svelte"
	import chrisWilson from "$lib/assets/cwggg.png"

	onMount(() => {
		setTimeout(() => {
			window.location.href = "https://www.pathofexile.com/trade2/search/poe2/Standard"
		}, 500)
	})
</script>

<main>
	<div class="center">
		<img src="{chrisWilson}" alt="our lord and saviour">
		<h3>Credit: <a href="https://www.reddit.com/user/Gunoo/">Gunoo</a></h3>
	</div>
</main>

<style>
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 98vh;
    }

    h3 {
        font-family: "Oswald", sans-serif;
    }

    img {
        height: 1000px;
    }
</style>
