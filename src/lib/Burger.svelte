<script>
	let showMobileNavMenu = "hidden"

	function toggleShowMobileNavMenu() {
		if (showMobileNavMenu === "hidden") {
			showMobileNavMenu = ""
			return
		}
		showMobileNavMenu = "hidden"
	}
</script>

<div
	aria-pressed="false"
	class="fixed top-0 right-0 z-50 m-5 origin-right md:hidden"
	id="burger"
	role="button"
>
	<a href="#burger" on:click={toggleShowMobileNavMenu}>
		<div class="space-y-2">
			<div class="w-8 bg-slate-300 h-0.5" />
			<div class="w-8 bg-slate-300 h-0.5" />
			<div class="w-8 bg-slate-300 h-0.5" />
		</div>
	</a>
</div>
<!-- nav popup thing -->
<div
	class="fixed top-16 right-5 w-3/4 to-slate-800 bg-gradient-to-r from-50% from-slate-800 rounded-md shadow-lg shadow-black md:hidden {showMobileNavMenu}"
>
	<ul class="m-5 flex flex-col gap-2 text-xl tracking-wide">
		<li><a href="/" on:click={toggleShowMobileNavMenu}>Home</a></li>
		<li><a href="#about" on:click={toggleShowMobileNavMenu}>About</a></li>
		<li><a href="#work" on:click={toggleShowMobileNavMenu}>Work</a></li>
		<li><a href="#projects" on:click={toggleShowMobileNavMenu}>Projects</a></li>
		<li><a href="#cv" on:click={toggleShowMobileNavMenu}>CV</a></li>
	</ul>
</div>
