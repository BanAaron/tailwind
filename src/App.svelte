<script>
  let showMobileNavMenu

  const toggleShowMobileNavMenu = () => {
    if (showMobileNavMenu === "hidden") {
      showMobileNavMenu = ""
    } else {
      showMobileNavMenu = "hidden"
    }
  };
</script>

<div id="container" class="grid grid-cols-1 text-slate-50 md:grid-cols-2 xl:grid-cols-3">
  <!-- mobile burger menu -->
  <div class="fixed top-0 right-0 z-50 m-5 origin-right md:hidden"
       role="button"
       id="burger"
       aria-pressed="false"
       on:click={toggleShowMobileNavMenu}>
    <div class="space-y-2">
      <div class="w-8 bg-slate-300 h-0.5"></div>
      <div class="w-8 bg-slate-300 h-0.5"></div>
      <div class="w-8 bg-slate-300 h-0.5"></div>
    </div>
  </div>
  <!-- nav popup thing -->
  <div class="fixed top-16 right-5 w-36 to-slate-950 bg-gradient-to-r from-50% from-slate-900 rounded-md shadow-lg shadow-black md:hidden {showMobileNavMenu}">
    <ul class="flex flex-col m-5 gap-2 font-semibold text-xl tracking-wide">
      <li><a href="#splash">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
  </div>
  <!-- splash screen section -->
  <div id="splash"
       class="col-start-1 col-end-1 h-auto min-h-screen w-auto min-w-screen content-center justify-center md:fixed md:w-1/2 xl:fixed xl:w-1/3">
    <div
      class="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900 space-y-2.5 md:to-45% md:to-slate-950 md:bg-gradient-to-r md:from-slate-900">
      <img class="m-3 h-64 w-auto rounded-full border-2 border-teal-300 object-left shadow-xl dark:shadow-slate-950"
           src="/assets/aaron.jpeg"
           alt="selfie of Aaron Barratt">
      <a href="/"><h1 class="text-5xl font-semibold text-white md:text-5xl">Aaron Barratt</h1></a>
      <h2 class="text-2xl text-slate-300 md:text-2xl">Full-stack Developer</h2>
      <div class="flex gap-x-2.5">
        <a href="https://github.com/banaaron" target="_blank">
          <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/aaron-barratt/" target="_blank">
          <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://twitter.com/aarontbarratt" target="_blank">
          <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round">
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/aarontbarratt" target="_blank">
          <svg class="h-8 w-auto text-slate-400 hover:text-teal-300"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="1.5"
               stroke-linecap="round"
               stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- about me section -->
  <div
    class="col-start-1 col-end-2 flex h-screen flex-col justify-center bg-gradient-to-b from-slate-900 p-7 text-sm text-slate-400 space-y-3 to-slate-950 md:from-20% md:from-slate-950 md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900 lg:col-start-2 lg:col-end-4">
    <h1 id="about" class="text-xl font-extrabold uppercase tracking-wide text-slate-100"><a href="#about" class="hover:text-teal-300">About</a></h1>
    <p>
      Back in 2006 I started playing EverQuest with my Dad on his "work computer". Since then on I have been obsessed with video games, tech, and programming.
    </p>
    <p>
      After many years (and too many games of StarCraft 2) I decided to study <a class="text-slate-300 hover:text-teal-300" href="https://www.northampton.ac.uk/courses/games-programming-bsc-hons/"
                                                                                 target="_blank">Computer
      Games Programming</a> at the University of Northampton.
    </p>
    <p>
      It turns out that making video games isn't quite as fun as playing them! Instead I discovered my passion was in <a href="#welcome-break" class="text-slate-300 hover:text-teal-300">databases</a>
      and <a href="#dentsu" class="text-slate-300 hover:text-teal-300">web development</a>.
    </p>
    <p>
      Fast forward today and I have had the privilege to work in such roles as <a class="text-slate-300 hover:text-teal-300" href="#welcome-break">database administrator</a>, <a href="#userzoom"
                                                                                                                                                                                  class="text-slate-300 hover:text-teal-300">support
      engineer</a>, and currently a <a href="#dentsu" class="text-slate-300 hover:text-teal-300">full-stack developer</a> at <a href="https://www.dentsu.com/uk/en"
                                                                                                                                target="_blank"
                                                                                                                                class="text-slate-300 hover:text-teal-300">Dentsu</a>
    </p>
  </div>
  <!-- jobs section -->
  <div
    class="col-start-1 col-end-2 flex h-auto min-h-screen flex-col justify-center from-slate-900 p-7 text-base text-slate-400 bg-slate-950 space-y-3 md:from-20% md:from-slate-950 md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900 lg:col-start-2 lg:col-end-4">
    <h1 id="work" class="text-xl font-extrabold uppercase tracking-wide text-slate-100"><a href="#work" class="hover:text-teal-300">Work</a></h1>
    <div id="jobs" class="grid grid-cols-1 gap-7">
      <!-- Dentsu -->
      <div id="job" class="text-sm space-y-1">
        <header id="dentsu" class="text-xs font-semibold uppercase tracking-wide text-slate-400">2023 — present</header>
        <h1 id="job-title" class="text-xl font-semibold text-slate-200"><a href="https://www.dentsu.com" target="_blank" class="hover:text-teal-300">Full-stack Developer · Dentsu</a></h1>
        <h2 id="city" class="text-slate-200">London</h2>
        <p>
          I design and develop robust web applications, ensuring a seamless user experience from front-end to back-end.
        </p>
        <p>
          My role is to transform innovative concepts into digital reality, delivering excellence in the world of web development.
        </p>
      </div>
      <!-- UserZoom -->
      <div id="job" class="text-sm space-y-1">
        <header id="userzoom" class="text-xs font-semibold uppercase tracking-wide text-slate-400">2020 — 2023</header>
        <h1 id="job-title" class="text-xl font-semibold text-slate-200"><a href="https://userzoom.com/" target="_blank" class="hover:text-teal-300">T3 Support · UserZoom</a></h1>
        <h2 id="city" class="text-slate-200">Manchester</h2>
        <p>
          I refactored the KPI ETL process saving over 16 hours or run time per week.
        </p>
        <p>
          In-depth expertise in troubleshooting and problem-solving, I assist in resolving complex issues,
          ensuring minimal downtime and maximum system efficiency
        </p>
      </div>
      <!-- welcome break -->
      <div id="job" class="text-sm space-y-1">
        <header id="welcome-break" class="text-xs font-semibold uppercase tracking-wide text-slate-400">2019 — 2020</header>
        <h1 id="job-title" class="text-xl font-semibold text-slate-200"><a href="https://www.welcomebreak.co.uk/" target="_blank" class="hover:text-teal-300">Database Admin · W. Break</a></h1>
        <h2 id="city" class="text-slate-200">Milton Keynes</h2>
        <p>
          I specialized in managing and optimizing data systems to ensure the integrity, security, and performance of critical information.
        </p>
        <p>
          My role involves fine-tuning SQL queries, implementing disaster recovery plans, and ensuring data availability.
        </p>
      </div>
      <!-- invu -->
      <div id="job" class="text-sm space-y-1">
        <header id="invu" class="text-xs font-semibold uppercase tracking-wide text-slate-400">2018 — 2019</header>
        <h1 id="job-title" class="text-xl font-semibold text-slate-200"><a href="https://www.agilico.co.uk/invu/" target="_blank" class="hover:text-teal-300">Professional Services · Invu</a></h1>
        <h2 id="city" class="text-slate-200">Northampton</h2>
        <p>
          Developed custom optical recognition processing solutions using C#.
        </p>
        <p>
          Implemented a £100,000+ invoice processing automation solution.
        </p>
      </div>
      <!-- invu -->
      <div id="job" class="text-sm space-y-1">
        <header id="invu" class="text-xs font-semibold uppercase tracking-wide text-slate-400">2017 — 2018</header>
        <h1 id="job-title" class="text-xl font-semibold text-slate-200"><a href="https://www.agilico.co.uk/invu/" target="_blank" class="hover:text-teal-300">Technical Support · Invu</a></h1>
        <h2 id="city" class="text-slate-200">Northampton</h2>
        <p>
          Provided excellent third line technical support to over 1,800 customers across the UK.
        </p>
        <p>
          Researched, piloted and implemented ZenDesk into the support team. Thoroughly document technical issues and solutions.
        </p>
      </div>
    </div>
  </div>
  <!-- projects -->
  <div
    class="col-start-1 col-end-2 flex h-auto min-h-screen pt-40 flex-col justify-center from-slate-900 p-7 text-base text-slate-400 bg-slate-950 space-y-3 md:from-20% md:from-slate-950 md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900 lg:col-start-2 lg:col-end-4">
    <h1 id="projects" class="text-xl font-extrabold uppercase tracking-wide text-slate-100"><a href="#projects" class="hover:text-teal-300">Projects</a></h1>
    <div id="projects" class="grid grid-cols-1 gap-7">
      <!-- aaronbarratt.dev -->
      <div id="project" class="text-sm space-y-1">
        <header id="project-title" class="text-xl font-semibold text-slate-200">
          <a href="https://github.com/BanAaron/aaron-barratt-website" target="_blank" class="hover:text-teal-300">aaronbarratt.dev</a>
        </header>
        <p>
          This website! Made to show off my HTML, CSS, and design skills. Built with <a href="https://svelte.dev/" target="_blank" class="text-slate-300 hover:text-teal-300">Svelte</a> and <a
          href="https://tailwindcss.com/" target="_blank" class="text-slate-300 hover:text-teal-300">Tailwind</a>.
        </p>
        <p>
          Using active design principles to work flawlessly for mobile and desktop.
        </p>
        <ul class="flex flex-wrap gap-2">
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Svelte</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">HTML</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Design</div>
          </li>
        </ul>
      </div>
      <!-- resolution changer -->
      <div id="project" class="text-sm space-y-1">
        <header id="project-title" class="text-xl font-semibold text-slate-200">
          <a href="https://github.com/BanAaron/resolution-changer" target="_blank" class="hover:text-teal-300">Resolution Changer</a>
        </header>
        <p>
          A simple system tray application to switch between resolutions with 1 or 2 clicks.
        </p>
        <p>
          I made this to quickly switch between 16:9 for gaming and 32:9 for productivity.
        </p>
        <ul class="flex flex-wrap gap-2">
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Python</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Pystray</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Windows API</div>
          </li>
        </ul>
      </div>
      <!-- image cropper -->
      <div id="project" class="text-sm space-y-1">
        <header id="project-title" class="text-xl font-semibold text-slate-200">
          <a href="https://github.com/BanAaron/image-cropper" target="_blank" class="hover:text-teal-300">Image Cropper</a>
        </header>
        <p>
          A simple GUI application to bulk crop images. Made using the <a href="https://pypi.org/project/Pillow/" class="text-slate-300 hover:text-teal-300">Pillow</a> image processing library.
        </p>
        <ul class="flex flex-wrap gap-2">
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Python</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Pillow</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tkinter</div>
          </li>
        </ul>
      </div>
      <!-- tekken -->
      <div id="project" class="text-sm space-y-1">
        <header id="project-title" class="text-xl font-semibold text-slate-200">
          <a href="https://github.com/BanAaron/tekken-backend" target="_blank" class="hover:text-teal-300">Tekken 8 API</a>
        </header>
        <p>
          A simple API written in Go. You can request character data for <a href="https://youtu.be/2hPuRQz6IlM" target="_blank" class="text-slate-300 hover:text-teal-300">Tekken 8</a>. This is a work
          in progress.
        </p>
        <p>
          I plan to build my own site that consumes this data to help players learn the game.
        </p>
        <ul class="flex flex-wrap gap-2">
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Go</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">API</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PostgreSQL</div>
          </li>
          <li class="mt-1">
            <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Supabase</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- footer -->
    <div
      class="col-start-1 pt-20 col-end-2 flex h-auto flex-col justify-center from-slate-900 text-base text-slate-400 bg-slate-950 space-y-3 md:from-20% md:from-slate-950 md:col-start-2 md:col-end-3 md:bg-gradient-to-r md:to-slate-900 lg:col-start-2 lg:col-end-4">
      <footer>
        <p class="text-xs">
          Coded with <a href="https://www.jetbrains.com/webstorm/" class="text-slate-300 hover:text-teal-300">IntelliJ</a>.
          Built with <a href="https://svelte.dev/" class="text-slate-300 hover:text-teal-300">Svelte</a>
          and <a href="https://tailwindcss.com/" class="text-slate-300 hover:text-teal-300">Tailwind</a>.
          Deployed by <a href="https://vercel.com/" class="text-slate-300 hover:text-teal-300">Vercel</a>
          ❤️
        </p>
        <div class="flex justify-center md:hidden">
          <a href="#splash">
            <svg class="mt-2 h-10 fill-slate-300 hover:fill-teal-300" viewBox="-3 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <g id="icomoon-ignore">
              </g>
              <path
                d="M26.221 16c0-7.243-5.871-13.113-13.113-13.113s-13.113 5.87-13.113 13.113c0 7.242 5.871 13.113 13.113 13.113s13.113-5.871 13.113-13.113zM1.045 16c0-6.652 5.412-12.064 12.064-12.064s12.064 5.412 12.064 12.064c0 6.652-5.411 12.064-12.064 12.064-6.652 0-12.064-5.412-12.064-12.064z">
              </path>
              <path d="M18.746 15.204l0.742-0.742-6.379-6.379-6.378 6.379 0.742 0.742 5.112-5.112v12.727h1.049v-12.727z">
              </path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  </div>
</div>
