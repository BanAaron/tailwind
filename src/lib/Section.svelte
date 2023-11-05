<script lang="ts">
	export let name: string = 'you forgot to pass in `name`';
	export let backgroundDark: boolean = true;
	let backgroundGradient: string;
	if (backgroundDark) {
		backgroundGradient = 'from-slate-950 to-slate-950';
	} else {
		backgroundGradient = 'from-slate-900 to-slate-950';
	}
</script>

<div
	class="col-start-1 col-end-2 flex min-h-screen h-auto flex-col justify-center
  bg-gradient-to-b p-7 text-sm text-slate-400 md:from-20% md:from-slate-950
  md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900 md:pl-0
  lg:col-start-2 lg:col-end-4 {backgroundGradient}"
>
	<h1 class="text-xl font-extrabold uppercase tracking-wide text-slate-100 mb-3" id={name}>
		<a class="hover:text-teal-300" href="#{name}">{name}</a>
	</h1>
	<slot />
</div>

<style>
	* {
		font-family: 'Geist', 'Inter', sans-serif;
	}
</style>
