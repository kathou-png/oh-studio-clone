<script lang="ts">
	let selected = 0;
	import { page } from '$app/stores';
</script>

<div class="fixed top-0 z-50 w-full">
	<nav class="align-center sticky inline-flex w-full justify-center p-5">
		<ol
			class="bg-blur-sm flex justify-between rounded-full bg-slate-100 bg-opacity-50 backdrop-blur"
		>
			<a
				class={`m-1 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out md:min-w-32 ${$page.url.pathname === '/' ? 'bg-white' : ''}`}
				href="/"
				aria-current={$page.url.pathname === '/'}
			>
				Home
			</a>
			<a
				class={`xs:min-w-1 } m-1 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out md:min-w-32`}
				href="/"
				aria-current={$page.url.pathname === '/'}
			>
				Profile
			</a>
			<a
				class={`xs:min-w-1 m-1 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out md:min-w-32`}
				href="/"
				aria-current={$page.url.pathname === '/'}
			>
				Contact
			</a>
			<a
				class={`xs:min-w-1 m-1 cursor-pointer rounded-full p-2 text-center transition delay-150 ease-in-out md:min-w-32 ${$page.url.pathname === '/about' ? 'bg-white' : ''}`}
				href="/about"
				aria-current={$page.url.pathname === '/about'}
			>
				About
			</a>
		</ol>
	</nav>
</div>
