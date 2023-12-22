<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	import { Datepicker, Select, Label, ListPlaceholder, Button } from 'flowbite-svelte';

	import { navigating } from '$app/stores';

	import { enhance } from '$app/forms';

	export let form;

	let sending = false;

	import { BadgeAlertIcon, BadgeCheckIcon, CheckCircleIcon, MinusCircleIcon } from 'lucide-svelte';

	import { Modal, Spinner } from 'flowbite-svelte';
	import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';
	import { goto, invalidateAll } from '$app/navigation';
	let popupModal = false;

	let selected: number;

	let rating: number;

	let network: number;

	let plan: number;

	let packages = [
		{ value: 'Data Bundle Plan' , name: 'Data Bundle Plan'  },
		{ value: 'Data Premium Plan', name: 'Data Premium Plan' },
		{ value: 'Data Family Plan' , name: 'Data Family Plan'  }
	];

	let networTypes = [
		{ value: '2G', name: '2G' },
		{ value: '3G', name: '3G' },
		{ value: '4G', name: '4G' },
		{ value: '5G', name: '5G' }
	];

	let deviceTypes = [
		{ value: 0, name: 'Android' },
		{ value: 1    , name: 'IOS'     },
		{ value: 2, name: 'Windows' },
		{ value: 3    , name: 'Mac'     }
	];

	let ratings = [
		{ value: 0, name: 'BAD' },
		{ value: 1, name: 'SATISFACTORY' },
		{ value: 2, name: 'GOOD' },
		{ value: 3, name: 'VERY GOOD' },
		{ value: 4, name: 'EXCELLENT' }
	];

    const result = () => {
        if (form?.error != true) {
            popupModal =  false;
        }
    }

    type final = {
		name: string;
		age: number;
		location: string;
        device: number;
        network: string;
        ratings: number;
		sms: number;
        revenue: number;
        data: number;
        calls: number;
        
	};

	let formData: final = {
		name: '',
		age: 0,
		location: '',
        device: 0,
        network: '',
        ratings: 0,
		sms: 0,
        revenue: 0,
        data: 0,
        calls: 0,
	};

    export const snapshot = {
		capture: () => {
			return formData;
		},
		restore: (data) => {
			formData = data;
		}
	};

    const getModal = () => {
        if (form?.error) {
            popupModal = false;
        } else {
            popupModal = true;
        }
    }
</script>

{#if $navigating}
	<ListPlaceholder />
{:else}
	<section class="bg-white dark:bg-gray-900">
		<div class="mx-auto max-w-2xl px-4 py-8 lg:py-16">
			<h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
			<form
				method="post"
				action="?/register"
				use:enhance={() => {
					sending = true;
					return ({ update }) => {
						update().finally(async () => {
							sending = false;
							// Optionally if you'd like to reload the data for the current page after form submission.
							// This is the default behavior for use:enhance.
							await invalidateAll();

                            getModal();

                            

						});
					};
				}}
			>
				<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
					<div class="sm:col-span-2">
						<label for="name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Name</label
						>
						<input
							type="text"
							name="name"
							id="name"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="Type your name"
                            bind:value={formData.name}
							required
						/>
					</div>
					<div>
						<label for="calls" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Age</label
						>
						<input
							type="number"
							name="age"
							id="age"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="12"
                            bind:value={formData.age}
							required
						/>
					</div>

					<div class="w-full">
						<label
							for="location"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Location</label
						>
						<input
							type="text"
							name="location"
							id="location"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="Type location"
                            bind:value={formData.location}
							required
						/>
					</div>
					<div class="w-full">
						<Label>
							Device Type
							<Select name="device" class="mt-2" items={deviceTypes} bind:value={formData.device} />
						</Label>
					</div>
					<div>
						<label for="sms" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>SMS Count
						</label>
						<input
							type="number"
							name="sms"
							id="sms"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="12"
                            bind:value={formData.sms}
							required
						/>
					</div>
					<div class="w-full">
						<Label>
							Customer Ratings
							<Select name="rating"  class="mt-2" items={ratings} bind:value={formData.ratings} />
						</Label>
					</div>
					<div class="w-full">
						<label
							for="revenue"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Revenue</label
						>
						<input
							type="number"
							name="revenue"
							id="revenue"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="Revenue"
                            bind:value={formData.revenue}
							required
						/>
					</div>
					<div class="w-full">
						<label
							for="data"
							class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Total Data Usage</label
						>
						<input
							type="number"
							name="data"
							id="data"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="Total Data Usage in GB"
                            bind:value={formData.data}
							required
						/>
					</div>
					<div class="w-full">
						<Label>
							Network Type
							<Select name="network"  class="mt-2" items={networTypes} bind:value={network} />
						</Label>
					</div>
					<div>
						<label for="calls" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
							>Number of Calls</label
						>
						<input
							type="number"
							name="calls"
							id="calls"
							class="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
							placeholder="12"
                            bind:value={formData.calls}
							required
						/>
					</div>
					
				</div>
				<div class="mt-5 sm:col-span-2">
					<label
						for="description"
						class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Comments</label
					>
					<textarea
						id="description"
						rows="8"
						class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
						placeholder="Enter your comments here..."
					></textarea>
				</div>
				<Button
					class=" mt-6 flex items-center space-x-3 font-medium"
					type="submit"
					color="green"
					
					>
                    <p class=" font-medium text-white">Submit</p>
					{#if sending}
						<Spinner currentColor="green" class={` w-6 h-6 `} currentFill="white" />
					{:else if form}
						{#if form.error}
							<MinusCircleIcon   class=" text-red-500" />
							{:else}
							<CheckCircleIcon class=" text-emerald-500" />
						{/if}
						
					{:else}
						<p></p>
						
					{/if}
                    
                    </Button
				>

				<Modal bind:open={popupModal} size="xs">
					<div transition:fade class=" flex flex-col items-center py-10 text-center">
						<BadgeCheckIcon
							class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
						/>
						<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
							Based on Our AI algorithm the system has decided that this user is fit for this bundle:
						</h3>
						<Button color="yellow" class="me-2 mb-5 text-white font-medium">{form?.plan}</Button>
                        
                        <Button on:click={() => goto('/')} color="green" class="me-2 text-white font-medium">OK</Button>
					</div>
				</Modal>
			</form>
		</div>
	</section>
{/if}
