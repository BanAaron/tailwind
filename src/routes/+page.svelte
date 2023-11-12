<script>
	import "../app.css"
	import "@fontsource-variable/inter"
	import Section from "$lib/Section.svelte"
	import Footer from "$lib/Footer.svelte"
	import Burger from "$lib/Burger.svelte"
	import Splash from "$lib/Splash.svelte"
	import Job from "$lib/Job.svelte"
	import Project from "$lib/Project.svelte"
	import Button from "$lib/Button.svelte"
	import CV from "$lib/assets/aaron_barratt.pdf"
	import ButtonDownload from "$lib/ButtonDownload.svelte"

	function openCV() {
		window.open(CV)
	}
</script>

<main class="grid grid-cols-1 text-slate-50 md:grid-cols-2 xl:grid-cols-3">
	<Burger />
	<Splash />
	<Section name="about" backgroundDark={false}>
		<p>
			Back in 2006 I started playing EverQuest with my Dad on his "work computer". Since then on I
			have been obsessed with video games, tech, and programming.
		</p>
		<br />
		<p>
			After many years (and too many games of StarCraft 2) I decided to study <a
				class="text-slate-300 hover:text-teal-300"
				href="https://www.northampton.ac.uk/courses/games-programming-bsc-hons/"
				target="_blank">Computer Games Programming</a
			> at the University of Northampton.
		</p>
		<br />
		<p>
			It turns out that making video games isn't quite as fun as playing them! Instead I discovered
			my passion was in <a class="text-slate-300 hover:text-teal-300" href="#Welcome Break"
				>databases</a
			>
			and <a class="text-slate-300 hover:text-teal-300" href="#Dentsu">web development</a>.
		</p>
		<br />
		<p>
			Fast forward today and I have had the privilege to work in such roles as <a
				class="text-slate-300 hover:text-teal-300"
				href="#Welcome Break">DBA</a
			>, <a class="text-slate-300 hover:text-teal-300" href="#UserZoom">support engineer</a>, and
			currently a
			<a class="text-slate-300 hover:text-teal-300" href="#Dentsu">Full Stack Developer</a>
			at
			<a
				class="text-slate-300 hover:text-teal-300"
				href="https://www.dentsu.com/uk/en"
				target="_blank">Dentsu</a
			>.
		</p>
	</Section>
	<Section name="work">
		<div class="grid grid-cols-1 gap-7" id="jobs">
			<!-- Dentsu -->
			<Job
				companyName="Dentsu"
				jobTitle="Full Stack Developer"
				location="London"
				start="2023"
				end="present"
				url="https://www.dentsu.com/"
			>
				<p>
					I design and develop robust web applications, ensuring a seamless user experience from
					front-end to back-end.
				</p>
				<p>
					My role is to transform innovative concepts into digital reality, delivering excellence in
					the world of web development.
				</p>
			</Job>
			<!-- UserZoom -->
			<Job
				companyName="UserZoom"
				jobTitle="T3 Support"
				location="Manchester"
				start="2020"
				end="2023"
				url="https://userzoom.com/"
			>
				<p>I refactored the KPI ETL process saving over 16 hours or run time per week.</p>
				<p>
					In-depth expertise in troubleshooting and problem-solving, I assist in resolving complex
					issues, ensuring minimal downtime and maximum system efficiency
				</p>
			</Job>
			<!-- Welcome Break -->
			<Job
				companyName="Welcome Break"
				jobTitle="Database Admin"
				location="Milton Keynes"
				start="2019"
				end="2020"
				url="https://www.welcomebreak.co.uk/"
			>
				<p>
					I specialized in managing and optimizing data systems to ensure the integrity, security,
					and performance of critical information.
				</p>
				<p>
					My role involves fine-tuning SQL queries, implementing disaster recovery plans, and
					ensuring data availability.
				</p>
			</Job>
			<!-- Invu -->
			<Job
				companyName="Invu"
				jobTitle="Professional Services"
				location="Northampton"
				start="2018"
				end="2019"
				url="https://www.agilico.co.uk/invu/"
			>
				<p>Developed custom optical recognition processing solutions using C#.</p>
				<p>Implemented a £100,000+ invoice processing automation solution.</p>
			</Job>
			<!-- Invu -->
			<Job
				companyName="Invu"
				jobTitle="Technical Support"
				location="Northampton"
				start="2017"
				end="2018"
				url="https://www.agilico.co.uk/invu/"
			>
				<p>
					Provided excellent third line technical support to over 1,800 customers across the UK.
				</p>
				<p>
					Researched, piloted and implemented ZenDesk into the support team. Thoroughly document
					technical issues and solutions.
				</p>
			</Job>
		</div>
	</Section>
	<!-- projects -->
	<Section name="projects">
		<div class="grid grid-cols-1 gap-7" id="projects">
			<!-- aaronbarratt.dev -->
			<Project
				projectName="aaronbarratt.dev"
				tags={["Svelte", "JavaScript", "Tailwind", "HTML", "Design"]}
				url="https://github.com/BanAaron/aaronbarratt-v2"
			>
				<p>
					This website! Made to show off my HTML, CSS, and design skills. Built with <a
						class="text-slate-300 hover:text-teal-300"
						href="https://svelte.dev/"
						target="_blank">Svelte</a
					>
					and
					<a
						class="text-slate-300 hover:text-teal-300"
						href="https://tailwindcss.com/"
						target="_blank">Tailwind</a
					>.
				</p>
				<p>
					Using active design principles to work flawlessly for mobile and desktop.<br />
				</p>
			</Project>
			<!-- resolution changer -->
			<Project
				projectName="Resolution Changer"
				tags={["Python", "Pystray", "Windows API"]}
				url="https://github.com/BanAaron/resolution-changer"
			>
				<p>A simple system tray application to switch between resolutions with 1 or 2 clicks.</p>
				<p>I made this to quickly switch between 16:9 for gaming and 32:9 for productivity.</p>
			</Project>
			<!-- image cropper -->
			<Project
				projectName="Image Cropper"
				tags={["Python", "Pillow", "Tkinter"]}
				url="https://github.com/BanAaron/image-cropper"
			>
				<p>
					A simple GUI application to bulk crop images. Made using the <a
						class="text-slate-300 hover:text-teal-300"
						href="https://pypi.org/project/Pillow/"
						target="_blank">Pillow</a
					> image processing library.
				</p>
			</Project>
			<!-- tekken -->
			<Project
				projectName="Tekken 8 API"
				tags={["Go", "API", "PostgreSQL", "Supase"]}
				url="https://github.com/BanAaron/tekken-backend"
			>
				<p>
					A simple API written in Go. You can request character data for <a
						class="text-slate-300 hover:text-teal-300"
						href="https://youtu.be/2hPuRQz6IlM"
						target="_blank">Tekken 8</a
					>. This is a work in progress.
				</p>
				<p>I plan to build my own site that consumes this data to help players learn the game.</p>
			</Project>
		</div>
	</Section>
	<Section name="cv">
		<div class="space-y-2 gap-2">
			<p>You can grab a copy of my CV here:</p>
			<Button func={openCV} text="Open" />
			<ButtonDownload file={CV} text="Download" />
		</div>
	</Section>
	<Footer />
</main>

<style>
	@font-face {
		font-family: geist;
		src: url("src/lib/assets/Geist-Regular.woff2");
	}

	@font-face {
		font-family: geist_mono;
		src: url("src/lib/assets/GeistMono-Regular.woff2");
	}

	* {
		font-family: "geist", "Inter", serif;
		font-size: 16px;
	}
</style>
