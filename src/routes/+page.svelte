<script lang="ts">
	import profile from '$lib/assets/karsten-winegeart-uNVjLyA3xu8-unsplash.jpg';
	// @ts-ignore
	import { BellIcon, ListFilterIcon } from 'lucide-svelte';

	import { Avatar, WidgetPlaceholder, Skeleton } from 'flowbite-svelte';
	import Chart from '$lib/components/Chart.svelte';
	import Radar from '$lib/components/Radar.svelte';
	import Line from '$lib/components/Line.svelte';
	import { navigating } from '$app/stores';

	export let data;
</script>


{#if $navigating}
	<div class=" space-y-8">
		<Skeleton />
		<WidgetPlaceholder />
	</div>
{:else}
	<div class=" w-[95%] pb-10">
		<div class=" flex w-full justify-end">
			<div class=" flex items-end space-x-8">
				<div class="flex items-center space-x-4 rtl:space-x-reverse">
					<Avatar src={profile} size="md" class=" h-14 w-14" />
					<div class="space-y-1 font-medium dark:text-white">
						<div>Jese Leos</div>
						<div class="text-sm text-gray-500 dark:text-gray-400">Admin</div>
					</div>
				</div>
				<div class=" flex h-12 w-12 items-center justify-center rounded-[50%] bg-[#e5f2f2f2]">
					<BellIcon />
				</div>
			</div>
		</div>
		<div class="  flex w-full space-x-14">
			<div class=" w-[70%]">
				<div>
					<h1 class=" text-lg font-semibold">In the last 30 days</h1>
					<div class=" mt-8 flex w-full items-center justify-between">
						<div class=" relative h-[80px] w-[30%] overflow-hidden rounded-md bg-[#427A5B]">
							<div class=" pl-4 pt-4 text-white">
								<h1 class=" text-2xl font-semibold">30,000</h1>
								<p class=" text-xs font-medium">Art Sales</p>
							</div>
							<div
								class=" absolute -right-9 -top-5 h-[15em] w-10 -rotate-[20deg] bg-[#7A643C]"
							></div>
							<div
								class=" absolute -top-5 right-[6px] h-[15em] w-10 -rotate-[20deg] bg-[#2E4438]"
							></div>
							<div
								class=" absolute -top-5 right-11 h-[15em] w-16 -rotate-[20deg] bg-[#905546]"
							></div>
						</div>
						<div class=" relative h-[80px] w-[30%] overflow-hidden rounded-md bg-[#427A5B]">
							<div class=" pl-4 pt-4 text-white">
								<h1 class=" text-2xl font-semibold">30,000</h1>
								<p class=" text-xs font-medium">Art Sales</p>
							</div>
							<div
								class=" absolute -right-9 -top-5 h-[15em] w-10 -rotate-[20deg] bg-[#7A643C]"
							></div>
							<div
								class=" absolute -top-5 right-[6px] h-[15em] w-10 -rotate-[20deg] bg-[#2E4438]"
							></div>
							<div
								class=" absolute -top-5 right-11 h-[15em] w-16 -rotate-[20deg] bg-[#905546]"
							></div>
						</div>
						<div class=" relative h-[80px] w-[30%] overflow-hidden rounded-md bg-[#427A5B]">
							<div class=" pl-4 pt-4 text-white">
								<h1 class=" text-2xl font-semibold">30,000</h1>
								<p class=" text-xs font-medium">Art Sales</p>
							</div>
							<div
								class=" absolute -right-9 -top-5 h-[15em] w-10 -rotate-[20deg] bg-[#7A643C]"
							></div>
							<div
								class=" absolute -top-5 right-[6px] h-[15em] w-10 -rotate-[20deg] bg-[#2E4438]"
							></div>
							<div
								class=" absolute -top-5 right-11 h-[15em] w-16 -rotate-[20deg] bg-[#905546]"
							></div>
						</div>
					</div>
				</div>

				<div class=" flex w-full items-start justify-between space-x-6 pt-10">
					<div class=" w-[50%]">
						<Line values={data.data} two={data.two} three={data.three} four={data.four} five={data.five} />
					</div>
					<div class=" w-[50%] translate-x-2">
						<Chart values={data.data} two={data.two} three={data.three} four={data.four} five={data.five} />
					</div>
				</div>
			</div>
			<div class=" mt-10 w-[30%]">
				<h1 class=" text-2xl font-semibold">Statistics</h1>
				<br />
				<Radar bundle={data.bundle} family={data.family} premium={data.premium} />
			</div>
		</div>
	</div>
{/if}
