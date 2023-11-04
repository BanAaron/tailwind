<script>
  import UpArrow from "$lib/UpArrow.svelte";
</script>

<div
  class="col-start-1 col-end-2 flex h-auto flex-col justify-center from-slate-900 p-7 pt-20 text-slate-400 bg-slate-950 space-y-3 md:from-20% md:from-slate-950 md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900 md:pl-0 lg:col-start-2 lg:col-end-4">
  <footer class="text-center md:text-left">
    <p class="text-xs">
      Coded with <a class="text-slate-300 hover:text-teal-300" href="https://www.jetbrains.com/webstorm/">IntelliJ</a>.
      Built with <a class="text-slate-300 hover:text-teal-300" href="https://svelte.dev/">Svelte</a>
      and <a class="text-slate-300 hover:text-teal-300" href="https://tailwindcss.com/">Tailwind</a>.
      Font is <a class="text-slate-300 hover:text-teal-300" href="https://vercel.com/font">Geist</a>.
      Deployed by <a class="text-slate-300 hover:text-teal-300" href="https://vercel.com/">Vercel</a>
      <span class="text-red-600">❤️</span>
    </p>
    <div class="flex justify-center md:hidden">
      <a href="#splash">
        <UpArrow/>
      </a>
    </div>
  </footer>
</div>

<style>
    * {
        font-family: "Geist", "Inter Variable", sans-serif
    }
</style>
