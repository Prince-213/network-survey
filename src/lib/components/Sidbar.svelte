<script lang="ts">
	import logo from '$lib/assets/mtn-seeklogo.com.svg';
    import { fade } from 'svelte/transition';
	import {
		LayoutDashboardIcon,
		UserIcon,
		ImageIcon,
		ReceiptIcon,
		SettingsIcon,
		LogOutIcon
	} from 'lucide-svelte';
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';

	$: pathName = $page.url.pathname;

	type links = {
		title: string;
		icon: any;
		path: string;
	}[];

	const links: links = [
		{
			title: 'Dashboard',
			icon: LayoutDashboardIcon,
			path: '/'
		},
		{
			title: 'Customers',
			icon: UserIcon,
			path: '/artists'
		},
		{
			title: 'Enroll',
			icon: ImageIcon,
			path: '/projects'
		},
		{
			title: 'Message',
			icon: ReceiptIcon,
			path: '/sales'
		}
	];
</script>

<aside transition:fade class=" fixed min-h-full  w-[15%] bg-[#f2f2f2]">
	<div class=" mx-auto flex h-[80vh] w-[75%] flex-col justify-between">
		<div>
			<img src={logo} alt="" />
		</div>
		<nav class=" space-y-5">
			{#each links as link, idx}
				<button
                    on:click={() => goto(link.path)}
					class={` flex w-full rounded-[4px]  px-4 py-3 ${
						pathName == link.path ? 'bg-[#B4CD93] text-black' : 'bg-transparent text-[#808080]'
					} items-center space-x-4  transition-all duration-150`}
				>
					<svelte:component this={link.icon} />
					<p class=" text-base font-medium">{link.title}</p>
				</button>
			{/each}
		</nav>
		<nav class=" space-y-5">
			<li
				class={` flex w-full rounded-[4px]  px-4 py-3 ${
					pathName == '/settings' ? 'bg-[#B4CD93] text-black' : 'bg-transparent text-[#808080]'
				} items-center space-x-4  transition-all duration-150`}
			>
				<svelte:component this={SettingsIcon} />
				<p class=" text-base font-medium">Settings</p>
			</li>

			<li
				class={` flex w-full rounded-[4px]  px-4 py-3 ${
					pathName == '/logout' ? 'bg-[#B4CD93] text-black' : 'bg-transparent text-red-500'
				} items-center space-x-4  transition-all duration-150`}
			>
				<svelte:component this={LogOutIcon} />
				<p class=" text-base font-medium">Log Out</p>
			</li>
		</nav>
	</div>
</aside>
