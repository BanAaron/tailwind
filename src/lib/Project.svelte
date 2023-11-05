<script lang="ts">
	export let projectName: string;
	export let url: string;
	export let tags: string[];
</script>

<div class="text-sm space-y-1" id="project">
	<header class="text-xl font-semibold text-slate-200" id={projectName}>
		<a class="hover:text-teal-300" href={url} target="_blank">{projectName}</a>
	</header>
	<slot />
	<ul class="flex flex-wrap gap-2">
		{#each tags as tag, i}
			<li class="mt-1">
				<div
					id={i}
					class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
				>
					{tag}
				</div>
			</li>
		{/each}
	</ul>
</div>
