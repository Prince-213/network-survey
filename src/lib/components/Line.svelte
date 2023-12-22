<script lang="ts">
	import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import {
		UserGroupSolid,
		ArrowUpSolid,
		ChevronDownSolid,
		ChevronRightSolid
	} from 'flowbite-svelte-icons';

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

	type gs = {
		data: number;
		revenue: number;
		calls: number;
		sms: number;
	}[];

	export let values: item;
	export let two: gs;
	export let three: gs;
	export let four: gs;
	export let five: gs;

	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Data Usage',
				color: '#1A56DB',
				data: [
					{ x: '2G', y: two.reduce((acc, currentValue) => acc + currentValue.data, 0) },
					{ x: '3G', y: three.reduce((acc, currentValue) => acc + currentValue.data, 0) },
					{ x: '4G', y: four.reduce((acc, currentValue) => acc + currentValue.data, 0) },
					{ x: '5G', y: five.reduce((acc, currentValue) => acc + currentValue.data, 0) }
				]
			},
			{
				name: 'SMS Count',
				color: '#FDBA8C',
				data: [
					{ x: '2G', y: two.reduce((acc, currentValue) => acc + currentValue.sms, 0) },
					{ x: '3G', y: three.reduce((acc, currentValue) => acc + currentValue.sms, 0) },
					{ x: '4G', y: four.reduce((acc, currentValue) => acc + currentValue.sms, 0) },
					{ x: '5G', y: five.reduce((acc, currentValue) => acc + currentValue.sms, 0) }
				]
			},
			{
				name: 'Call Count',
				color: '#FD998C',
				data: [
					{ x: '2G', y: two.reduce((acc, currentValue) => acc + currentValue.calls, 0)   },
					{ x: '3G', y: three.reduce((acc, currentValue) => acc + currentValue.calls, 0) },
					{ x: '4G', y: four.reduce((acc, currentValue) => acc + currentValue.calls, 0)  },
					{ x: '5G', y: five.reduce((acc, currentValue) => acc + currentValue.calls, 0)  }
				]
			}
		],
		chart: {
			type: 'bar',
			height: '320px',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '70%',
				borderRadiusApplication: 'end',
				borderRadius: 8
			}
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontFamily: 'Inter, sans-serif'
			}
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1
				}
			}
		},
		stroke: {
			show: true,
			width: 0,
			colors: ['transparent']
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -14
			}
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: false
		},
		xaxis: {
			floating: false,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
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
		},
		fill: {
			opacity: 1
		}
	};
</script>

<Card>
	<div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
		<div class="flex items-center">
			<div
				class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
			>
				<UserGroupSolid class="h-6 w-6 text-gray-500 dark:text-gray-400" />
			</div>
			<div>
				<h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">
					₦{values
						.reduce((acc, currentValue) => acc + currentValue.revenue, 0)
						.toLocaleString('en', {
							notation: 'compact',
							compactDisplay: 'short'
						})}
				</h5>
				<p class="text-sm font-normal text-gray-500 dark:text-gray-400">
					Revenue generated per week
				</p>
			</div>
		</div>
		<div>
			<span
				class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
			>
				<ArrowUpSolid class="me-1.5 h-2.5 w-2.5" />
				42.5%
			</span>
		</div>
	</div>
	<div class="grid grid-cols-2">
		<dl class="flex items-center">
			<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt>
			<dd class="text-sm font-semibold text-gray-900 dark:text-white">
				₦{values
					.reduce((acc, currentValue) => acc + currentValue.revenue / 80, 0)
					.toLocaleString('en', {
						notation: 'compact',
						compactDisplay: 'short'
					})}
			</dd>
		</dl>
		<dl class="flex items-center justify-end">
			<dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Conversion rate:</dt>
			<dd class="text-sm font-semibold text-gray-900 dark:text-white">
				{values.reduce((acc, currentValue) => acc + currentValue.revenue, 0) /
					values.reduce((acc, currentValue) => acc + currentValue.revenue / 80, 0)}%
			</dd>
		</dl>
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
				Leads Report
				<ChevronRightSolid class="ms-1.5 h-2.5 w-2.5" />
			</A>
		</div>
	</div>
</Card>
