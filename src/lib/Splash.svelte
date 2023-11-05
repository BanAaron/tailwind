<script>
	import selfie from '$lib/assets/selfie.jpeg';
	import GitHubLogo from '$lib/GitHubLogo.svelte';
	import LinkedinLogo from '$lib/LinkedinLogo.svelte';
	import TwitterLogo from '$lib/TwitterLogo.svelte';
	import InstagramLogo from '$lib/InstagramLogo.svelte';
</script>

<div
	class="col-start-1 col-end-1 h-auto min-h-screen w-auto content-center justify-center min-w-screen md:fixed md:w-1/2 xl:fixed xl:w-1/3"
	id="splash"
>
	<div
		class="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 space-y-2.5 md:to-45% md:to-slate-950 md:from-slate-950 md:bg-gradient-to-r"
	>
		<img
			alt="selfie of Aaron Barratt"
			width="256"
			height="256"
			class="m-3 h-64 w-auto rounded-full border-2 border-teal-300 object-left shadow-xl dark:shadow-slate-950"
			src={selfie}
		/>
		<a href="/">
			<h1 class="text-5xl font-semibold text-white md:text-5xl">Aaron Barratt</h1>
		</a>
		<h2 class="text-2xl text-slate-300 md:text-2xl">Full-stack Developer</h2>
		<div class="flex flex-row gap-x-2.5">
			<a href="https://github.com/banaaron" target="_blank">
				<GitHubLogo />
			</a>
			<a href="https://www.linkedin.com/in/aaron-barratt/" target="_blank">
				<LinkedinLogo />
			</a>
			<a href="https://twitter.com/aarontbarratt" target="_blank">
				<TwitterLogo />
			</a>
			<a href="https://www.instagram.com/aarontbarratt" target="_blank">
				<InstagramLogo />
			</a>
		</div>
		<ul class="hidden flex-row justify-evenly gap-2.5 md:flex">
			<li><a class="hover:text-teal-300" href="#about">About</a></li>
			<li>-</li>
			<li><a class="hover:text-teal-300" href="#work">Work</a></li>
			<li>-</li>
			<li><a class="hover:text-teal-300" href="#project">Projects</a></li>
		</ul>
	</div>
</div>
