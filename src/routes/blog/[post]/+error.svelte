<script>
  import {page} from '$app/stores';
  import Tailwind from "$lib/Tailwind.svelte";
  import UpArrow from "$lib/UpArrow.svelte";

  function foo() {
    alert("bar")
  }
</script>

<Tailwind/>

<main class="bg-black text-white">
  <div class="h-screen flex flex-col p-10 items-center justify-center">
    <div class="space-y-5">
      {#if $page.status === 500}
        <h1 class="text-3xl font-bold md:text-5xl">Sorry, this page does not exist.</h1>
        <h1 class="text-xl font-semibold md:text-2xl">{$page.status}: {$page.error.message}</h1>
      {:else}
        <h1 class="text-3xl font-bold">Oops, something went wrong.</h1>
        <h1 class="text-xl font-semibold">{$page.status}: {$page.error.message}</h1>
      {/if}
      <div class="flex flex-col items-center">
        <a href="/blog" class="hover:text-teal-300">
          <UpArrow/>
        </a>
      </div>
    </div>
  </div>
</main>
