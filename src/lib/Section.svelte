<script lang="ts">
	export let name: string = "you forgot to pass in `name`"
	export let backgroundDark: boolean = true
	let backgroundGradient: string
	if (backgroundDark) {
		backgroundGradient = "from-slate-950 to-slate-950"
	} else {
		backgroundGradient = "from-slate-900 to-slate-950"
	}
</script>

<div
	class="col-start-1 col-end-2 flex min-h-screen h-auto flex-col justify-center
  bg-gradient-to-b p-7 text-sm text-slate-400 md:from-20% md:from-slate-950
  md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900
  lg:col-start-2 lg:col-end-4 {backgroundGradient}"
>
	<div class="md:w-3/4">
		<h1 class="text-2xl font-extrabold uppercase tracking-wider text-slate-100 mb-5" id={name}>
			<a class="hover:text-teal-300" href="#{name}">{name}</a>
		</h1>
		<slot />
	</div>
</div>

<style>
	* {
		font-family: "Geist", "Inter", sans-serif;
	}
</style>
