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
			title: 'Aire',
			type: 'image',
			path: 'https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024'
		},
		{
			title: 'Aire',
			type: 'image',
			path: 'https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024'
		},
		{
			title: 'Aire',
			type: 'video',
			path: 'https://framerusercontent.com/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M.mp4'
		},
		{
			title: 'Aire',
			type: 'image',
			path: 'https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024'
		}
	];
</script>

<div class="grid grid-cols-2 gap-10 p-5">
	{#each items as item}
		<div class="rounded-[120px]">
			{#if item.type === 'image'}
				<img src={item.path} />
			{:else if item.type === 'video'}
				<video autoplay loop muted src={item.path} class="h-full w-full object-cover" />
			{/if}
		</div>
	{/each}
</div>
