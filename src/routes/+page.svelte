<script lang="ts">
	import Hero from './components/hero.svelte';
	import Galery from './components/galery.svelte';
	import Footer from './components/footer.svelte';
	import Navbar from './components/navbar.svelte';
</script>

<div class="flex w-screen flex-col justify-items-center">
	<svelte:component this={Navbar} />
	<svelte:component this={Hero} />
	<svelte:component this={Galery} />
	<svelte:component this={Footer} />
</div>
