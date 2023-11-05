<script lang="ts">
	export let jobTitle: string
	export let companyName: string
	export let location: string
	export let start: string
	export let end: string
	export let url: string
</script>

<div class="text-sm space-y-1" id="job">
	<header class="text-xs font-semibold uppercase tracking-wide text-slate-400" id={companyName}>
		{start} — {end}
	</header>
	<h1 class="text-xl font-semibold text-slate-200" id="job-title">
		<a class="hover:text-teal-300" href={url} target="_blank">
			{jobTitle} · {companyName}
		</a>
	</h1>
	<h2 class="text-slate-200" id="city">{location}</h2>
	<slot />
</div>
