<script>
	import profilePic from '/static/icon.webp';
	const title = "paraduck host.";
</script>

<div class="App bg-black text-white">
	<header class="App-header m-auto">
		<img
		width="190px"
		height="190px"
		src={profilePic}
		class="rounded-full relative"
		alt="profile"
	/>
		<h1 class="headertext mt-2 font-bold text-5xl sm:tagline m-0 rise-wrapper whitespace-pre text-left">
			{#each title.split('') as word, index}
				<span class="rise-anim md:inline-flex block " style={`--delay: ${index * 100 + 100}ms`}
						>{`${word}`}</span
					>
			{/each}
		</h1>
		<div
			class="links flex text-base align-middle font-mono h-min-content rise-wrapper font-bold transition-all duration-500 ease-in-out"
		>
			<a
				href="//panel.paraduckhost.com/
"
				class="text-gradient border-2 p-2 my-3 mx-3 md:mx-6 from-[#ee7168] to-[#f3a970] bg-gradient-to-br transition-all leading-tight rise-anim inline-flex border-orange-400 hover:border-orange-600"
				style={`--delay: ${(title.split(' ').length + 3) * 100 + 100}ms`}
			>
				panel
			</a>
			<a
				href="//discord.gg/uNP6KhJrxA"
				class="text-gradient border-2 p-2 my-3 mx-3 md:mx-6 from-[#4184aa] to-[#88feac] bg-gradient-to-br transition-all leading-tight rise-anim inline-flex border-[#4184aa] hover:border-[#88feac]"
				style={`--delay: ${(title.split(' ').length + 4) * 100 + 100}ms`}
			>
				community
			</a>
		</div>
		<p class="text-base my-3 text-left font-bold w-1/2 poppins">
			ParaDuck Host is a reliable free 24/7 host to power your discord bots or minecraft servers powered by powerful Intel/AMD processors absolutely free for everyone!
		</p>
		<div class="static bottom-2 contents-center">
			<a href="/privacy" class="relative">privacy</a> | <a href="/terms" class="relative">terms</a> | <a href="/community" class="relative">community</a>
		</div>
	</header>
</div>
