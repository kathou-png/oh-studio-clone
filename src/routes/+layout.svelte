<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	let { children } = $props();
</script>

<svelte:component this={Navbar} />
{@render children()}
