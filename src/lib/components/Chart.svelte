<script lang="ts">
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { ChevronRightSolid, ChevronDownSolid } from 'flowbite-svelte-icons';

	type gs = {
		data: number;
		revenue: number;
		calls: number;
		sms: number;
	}[];

	type item = {
		id: number;
		name: string;
		age: number;
		device: number;
		rating: number;
		network: number;
		former: number;
		data: number;
		revenue: number;
		calls: number;
	}[];

	export let values: item;
	export let two: gs;
	export let three: gs;
	export let four: gs;
	export let five: gs;

	let options = {
		chart: {
			height: '400px',
			maxWidth: '100%',
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: '#1C64F2',
				gradientToColors: ['#1C64F2']
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0
			}
		},
		series: [
			{
				name: 'Revenue',
				data: [
					two.reduce((acc, currentValue) => acc + currentValue.revenue, 0),
					three.reduce((acc, currentValue) => acc + currentValue.revenue, 0),
					four.reduce((acc, currentValue) => acc + currentValue.revenue, 0),
					five.reduce((acc, currentValue) => acc + currentValue.revenue, 0)
				],
				color: '#1A56DB'
			}
		],
		xaxis: {
			categories: ['2G Network', '3G Network', '4G Network', '5G Network'],
			labels: {
				show: false
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	};
</script>

<Card>
	<div class="flex justify-between">
		<div>
			<h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">{values.length}k</h5>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
		</div>
		<div
			class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500"
		>
			12%
			<ChevronRightSolid class="ms-1 h-3 w-3" />
		</div>
	</div>
	<Chart {options} />
	<div
		class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"
	>
		<div class="flex items-center justify-between pt-5">
			<Button
				class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent"
				>Last 7 days<ChevronDownSolid class="m-2.5 ms-1.5 w-2.5" /></Button
			>
			<Dropdown class="w-40" offset={-6}>
				<DropdownItem>Yesterday</DropdownItem>
				<DropdownItem>Today</DropdownItem>
				<DropdownItem>Last 7 days</DropdownItem>
				<DropdownItem>Last 30 days</DropdownItem>
				<DropdownItem>Last 90 days</DropdownItem>
			</Dropdown>
			<A
				href="/"
				class="rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700"
			>
				Users Report
				<ChevronRightSolid class="ms-1.5 h-2.5 w-2.5" />
			</A>
		</div>
	</div>
</Card>
