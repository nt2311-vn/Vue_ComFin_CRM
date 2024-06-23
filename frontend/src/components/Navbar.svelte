<script>
	import { writable } from 'svelte/store';

	let currentTheme = writable('light');
	let loggedInUser = writable(null);

	const themes = [
		'light',
		'dark',
		'emerald',
		'corporate',
		'valentine',
		'halloween',
		'forest',
		'lofi',
		'pastel',
		'fantasy',
		'black',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'coffee',
		'winter',
		'nord',
		'sunset'
	];
	const setTheme = (theme) => {
		currentTheme.set(theme);
		document.documentElement.setAttribute('data-theme', theme);
	};
</script>

<nav class="navbar bg-base-100 shadow-lg w-full mb-8">
	<div class="flex-1 px-2 mx-2">
		<span class="text-lg font-bold">Finance CRM</span>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end mr-2">
			<label for="themeSelector" class="text-sm text-gray-600">Select Theme:</label>
			<select
				id="themeSelector"
				class="btn btn-outline p-2 shadow bg-base-100 rounded-box w-52 max-h-96 overflow-y-auto"
				on:change={(event) => setTheme(event.target.value)}
			>
				<option disabled selected hidden>Select a theme</option>
				{#each themes as theme}
					<option value={theme}>{theme}</option>
				{/each}
			</select>
		</div>
		{#if $loggedInUser}
			<button on:click={() => {}} class="btn btn-accent">Logout</button>
		{/if}
	</div>
</nav>
