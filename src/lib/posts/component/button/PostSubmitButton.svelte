<script lang="ts">
	export let handleSubmit;
</script>

<button
	class="flex items-center justify-center border-2 border-neutral-700 px-10 py-2 text-lg font-bold hover:border-emerald-800"
	on:click={handleSubmit}
>
	저장
</button>
