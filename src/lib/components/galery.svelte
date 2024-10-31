<script>
	const items = [
		{
			title: 'Aire',
			type: 'image',
			path: 'https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024'
		},
		{
			title: 'Correlated',
			type: 'image',
			path: 'https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024'
		},
		{
			title: 'Channel 5',
			type: 'image',
			path: 'https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024'
		},
		{
			title: 'Ronald Abraham',
			type: 'image',
			path: 'https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024'
		},
		{
			title: 'Propeller',
			type: 'video',
			path: 'https://framerusercontent.com/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M.mp4'
		},
		{
			title: 'Schuh',
			type: 'image',
			path: 'https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024'
		}
	];
</script>

<section class="xs:grid-cols-1 grid gap-10 p-16 md:grid-cols-2">
	{#each items as item}
		<div class=" group relative overflow-hidden rounded-lg">
			{#if item.type === 'image'}
				<img src={item.path} class="hover:blur-sm" />
			{:else if item.type === 'video'}
				<video autoplay loop muted src={item.path} class="h-full w-full object-cover" />
			{/if}
			<div
				class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<span class="text-xl">{item.title}</span>
			</div>
		</div>
	{/each}
</section>
