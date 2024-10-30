<script lang="ts">
	import Hero from '../lib/components/hero.svelte';
	import Galery from '../lib/components/galery.svelte';
	import Footer from '../lib/components/footer.svelte';
	import Navbar from '../lib/components/navbar.svelte';
</script>

<div class="flex w-screen flex-col justify-items-center">
	<svelte:component this={Hero} />
	<svelte:component this={Galery} />
	<svelte:component this={Footer} />
</div>
