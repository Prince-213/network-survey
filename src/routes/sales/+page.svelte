<script>
	import {
		Textarea,
		Toolbar,
		ToolbarGroup,
		ToolbarButton,
		Button,
		ListPlaceholder,
		Modal
	} from 'flowbite-svelte';
	import { PaperClipOutline, MapPinAltSolid, ImageOutline } from 'flowbite-svelte-icons';
	import { navigating } from '$app/stores';
	import { BadgeCheckIcon } from 'lucide-svelte';
	import { fade } from 'svelte/transition';

	let popupModal = false;

	$: message = '';
</script>

{#if $navigating}
	<ListPlaceholder />
{:else}
	<div class=" w-[95%]">
		<form>
			<Textarea class="mb-4" rows="15" placeholder="Write a comment">
				<div slot="footer" class="flex items-center justify-between">
					<div class=" flex items-center space-x-4">
						<Button on:click={() => { message = 'Data Bundle'; popupModal=true }} type="submit" class=" bg-yellow-400">Send To Bundle Plan</Button>
						<Button on:click={() => { message = 'Family Bundle'; popupModal=true }} type="submit" class=" bg-blue-400">Send To Family Plan</Button>
						<Button on:click={() => { message = 'Premium Bundle'; popupModal=true }} type="submit" class=" bg-green-400">Send To Premium Plan</Button>
					</div>

					<Toolbar embedded>
						<ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6" /></ToolbarButton>
						<ToolbarButton name="Set location"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>
						<ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>
					</Toolbar>
				</div>
			</Textarea>
		</form>
		<p class="ms-auto text-xs text-gray-500 dark:text-gray-400">
			Remember, contributions to this topic should follow our <a
				href="/"
				class="text-primary-600 hover:underline dark:text-primary-500"
			>
				Community Guidelines
			</a>
			.
		</p>

		<Modal bind:open={popupModal} size="xs">
			<div transition:fade class=" flex flex-col items-center py-10 text-center">
				<BadgeCheckIcon class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
				<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					Broadcast SMS has been sent to users qualified for {message}
				</h3>
			</div>
		</Modal>
	</div>
{/if}
