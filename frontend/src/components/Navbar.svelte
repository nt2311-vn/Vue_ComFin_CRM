<script>
	import { onMount } from 'svelte';
	let currentTheme = 'light';
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

	const chooseTheme = (theme) => {
		currentTheme = theme;
		document.documentElement.setAttribute('data-theme', theme);
	};

	onMount(() => {
		document.documentElement.setAttribute('data-theme', currentTheme);
	});
</script>

<nav class="navbar bg-primary/50 backdrop-blur-md text-primary-content">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost normal-case text-xl">App Logo</a>
	</div>
	<div class="navbar-end flex items-center space-x-4">
		<div class="dropdown">
			<button tabindex="0" class="btn btn-ghost btn-circle dropdown-toggle">
				<span>Select Theme: {currentTheme}</span>
			</button>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100/80 backdrop-blur-md rounded-box w-52"
			>
				<li class="menu-title"><span>Themes</span></li>
				{#each themes as theme}
					<li><a href="#" role="button" on:click={() => chooseTheme(theme)}>{theme}</a></li>
				{/each}
			</ul>
		</div>
		<button class="btn btn-outline btn-primary ml-2" on:click={() => {}}>Logout</button>
	</div>
</nav>
