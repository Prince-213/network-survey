<script lang="ts">
	import { faker } from '@faker-js/faker';
	import type { PageData } from './$types';
	import { FilterSolid } from 'flowbite-svelte-icons';
	import android from '$lib/assets/icons8-android.svg';
	import ios from '$lib/assets/icons8-ios.svg';
	import windows from '$lib/assets/icons8-windows.svg';
	import apple from '$lib/assets/icons8-ios (1).svg';
	import edge from '$lib/assets/icons8-2g-64.png';
	import three from '$lib/assets/icons8-3g-64.png';
	import four from '$lib/assets/icons8-4g-100.png';
	import five from '$lib/assets/icons8-5g-100.png';
	import { navigating } from '$app/stores';

	export let data;

    let dog = 'go'

    

	const formatted = (revenue: number) => {
		let locale: string = 'en';

		let formattedNumber = revenue.toLocaleString('en', {
			notation: 'compact',
			compactDisplay: 'short'
		});

		return formattedNumber;
	};

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		TableSearch,
		Avatar,
		Button,
		Dropdown,
		DropdownItem,
		Checkbox,
		Progressbar,
		ListPlaceholder
	} from 'flowbite-svelte';
	import { onMount } from 'svelte';
	let searchTerm = '';

	$: items = data.data;

	$: filteredItems = items?.filter(
		(item) => item.plan.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
	);
</script>

{#if $navigating}
	<ListPlaceholder />
{:else}
	<div class=" w-[95%] pb-10">
		<div class=" relative w-full">
			<caption
				class="w-full bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white"
			>
				All Customers
				<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
					Monitor artist sales, reviews, etc.
				</p>
			</caption>


			<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
				<TableHead>
					<TableHeadCell>ID</TableHeadCell>
					<TableHeadCell>Name</TableHeadCell>
					<TableHeadCell>Age</TableHeadCell>
					<TableHeadCell>Device Type</TableHeadCell>
					<TableHeadCell>Rating</TableHeadCell>
					<TableHeadCell>Network Type</TableHeadCell>
					<TableHeadCell>Existing Package</TableHeadCell>
					<TableHeadCell>Total Data Usage</TableHeadCell>
					<TableHeadCell>Revenue</TableHeadCell>
					<TableHeadCell>Number of Calls</TableHeadCell>
					<TableHeadCell class=" text-right">SMS Count</TableHeadCell>
				</TableHead>
				<TableBody tableBodyClass=" divide-y">
					{#each filteredItems as item, idx}
						<TableBodyRow>
							<TableBodyCell>{idx}</TableBodyCell>
							<TableBodyCell>{item.name}</TableBodyCell>
							<TableBodyCell>{item.age}</TableBodyCell>
							<TableBodyCell class=" flex justify-center">
								{#if item.device == 1}
									<img src={ios} width="32px" alt="" />
								{:else if item.device == 2}
									<img src={apple} width="32px" alt="" />
								{:else if item.device == 3}
									<img src={windows} width="32px" alt="" />
								{:else}
									<img src={android} width="32px" alt="" />
								{/if}
							</TableBodyCell>
							<TableBodyCell>
								<div class="">
									<Progressbar progress={`${item.rating * 25}`} size="h-1.5" />
								</div>
							</TableBodyCell>
							<TableBodyCell class=" flex justify-center">
								{#if item.network == '3G'}
									<img src={three} width="32px" alt="" />
								{:else if item.network == '4G'}
									<img src={four} width="32px" alt="" />
								{:else if item.network == '5G'}
									<img src={five} width="32px" alt="" />
								{:else}
									<img src={edge} width="32px" alt="" />
								{/if}
							</TableBodyCell>
							<TableBodyCell class=" text-center ">
								{#if item.plan.toLowerCase() == 'family plan'}
									<div
										class=" rounded-md bg-blue-400 px-3 py-2 text-center text-base font-semibold text-white"
									>
										Family Plan
									</div>
								{:else if item.plan.toLowerCase() == 'premium plan'}
									<div
										class=" rounded-md bg-green-400 px-3 py-2 text-center text-base font-semibold text-white"
									>
										Premium Plan
									</div>
								{:else}
									<div
										class=" rounded-md bg-yellow-400 px-3 py-2 text-center text-base font-semibold text-white"
									>
										Bundle Plan
									</div>
								{/if}
							</TableBodyCell>
							<TableBodyCell class=" text-right">{item.data}GB</TableBodyCell>
							<TableBodyCell class=" flex justify-end"
								>₦ {item.revenue.toLocaleString('en', {
									notation: 'compact',
									compactDisplay: 'short'
								})}</TableBodyCell
							>
							<TableBodyCell class=" text-right">{item.calls}</TableBodyCell>
							<TableBodyCell class=" text-right">{ Intl.NumberFormat('en-US').format(item.sms) }</TableBodyCell>
						</TableBodyRow>
					{/each}
				</TableBody>
			</TableSearch>
		</div>
	</div>
{/if}
