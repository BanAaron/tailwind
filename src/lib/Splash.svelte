<script>
  import selfie from "$lib/assets/selfie.jpeg";
</script>  <!-- splash screen section -->

<div class="col-start-1 col-end-1 h-auto min-h-screen w-auto content-center justify-center min-w-screen md:fixed md:w-1/2 xl:fixed xl:w-1/3"
     id="splash">
  <div
    class="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 space-y-2.5 md:to-45% md:to-slate-950 md:from-slate-950 md:bg-gradient-to-r">
    <img alt="selfie of Aaron Barratt"
         width="256"
         height="256"
         class="m-3 h-64 w-auto rounded-full border-2 border-teal-300 object-left shadow-xl dark:shadow-slate-950"
         src={selfie}>
    <a href="/">
      <h1 class="text-5xl font-semibold text-white md:text-5xl">Aaron Barratt</h1>
    </a>
    <h2 class="text-2xl text-slate-300 md:text-2xl">Full-stack Developer</h2>
    <div class="flex flex-row gap-x-2.5">
      <a href="https://github.com/banaaron" target="_blank">
        <svg aria-label="check out my GitHub"
             class="h-8 w-auto text-slate-400 hover:text-teal-300"
             fill="none"
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="1.5"
             viewBox="0 0 24 24">
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/aaron-barratt/" target="_blank">
        <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
             fill="none"
             stroke="currentColor"
             aria-label="checkout my LinkedIn"
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="1.5"
             viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect height="12" width="4" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      <a href="https://twitter.com/aarontbarratt" target="_blank">
        <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
             fill="none"
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             aria-label="checkout my Twitter"
             stroke-width="1.5"
             viewBox="0 0 24 24">
          <path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/aarontbarratt" target="_blank">
        <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
             fill="none"
             stroke="currentColor"
             stroke-linecap="round"
             stroke-linejoin="round"
             aria-label="checkout my Instagram"
             stroke-width="1.5"
             viewBox="0 0 24 24">
          <rect height="20" rx="5" ry="5" width="20" x="2" y="2"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
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
