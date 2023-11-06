<script lang="ts">
	export let file: string
	export let text: string
</script>

<a
	href={file}
	download="aaron_barratt.pdf"
	class="relative inline-flex items-center justify-center hover:text-teal-300 w-32 mr-2 py-3 overflow-hidden font-medium tracking-tighter text-slate-50 bg-gray-800 rounded-lg group"
>
	<span
		class="absolute w-0 h-0 transition-all duration-500 ease-out bg-teal-400/10 rounded-full group-hover:w-56 group-hover:h-56"
	/>
	<span
		class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"
	/>
	<span class="relative">{text}</span>
</a>
