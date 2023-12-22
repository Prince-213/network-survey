<script lang="ts">
	import '../app.pcss';
	import Sidebar from '$lib/components/Sidbar.svelte'
	import { fade } from 'svelte/transition';
</script>

<div class=" relative font-quick flex min-h-screen w-full items-stretch justify-between space-x-10 bg-white">
	
	<Sidebar />
	
	<div class =" w-[12%]">

	</div>
	<div class=" min-h-full w-[85%] pt-[60px]">
		<slot />
	</div>
</div>
