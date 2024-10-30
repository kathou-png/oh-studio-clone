<script lang="ts">
	let selected = 0;

	function handleSelect(index: number) {
		selected = index;
	}
</script>

<div class="fixed top-0 z-50 w-full">
	<nav class="align-center sticky inline-flex w-full justify-center p-5">
		<ol
			class="bg-blur-sm flex justify-between rounded-full bg-slate-100 bg-opacity-50 backdrop-blur"
		>
			<button
				class={`m-1 min-w-32 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out ${selected === 0 ? 'bg-white' : ''}`}
				on:click={() => {
					handleSelect(0);
					window.location.href = '/';
				}}
			>
				Home
			</button>
			<button
				class={`m-1 min-w-32 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out ${selected === 1 ? 'bg-white' : ''}`}
				on:click={() => handleSelect(1)}
			>
				Profile
			</button>
			<button
				class={`m-1 min-w-32 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out ${selected === 2 ? 'bg-white' : ''}`}
				on:click={() => handleSelect(2)}
			>
				Contact
			</button>
			<button
				class={`m-1 min-w-32 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out ${selected === 3 ? 'bg-white' : ''}`}
				on:click={() => {
					handleSelect(3);
					window.location.href = '/about';
				}}
			>
				About
			</button>
		</ol>
	</nav>
</div>
