<script lang="ts">
	export let handleOnClick;
	export let text;
</script>

<button
	class="flex items-center justify-center rounded border-2 border-neutral-700
	px-10 py-2 text-lg font-bold hover:border-emerald-800"
	on:click={handleOnClick}
>
	{text}
</button>
