<script lang="ts">
    import { onMount } from 'svelte';

    type Icon = "close" | "regenerate";

    export let placeholder: string;
    export let value = "";
    export let icon: Icon;

    onMount(() => {
        handleClick();
    })

    function handleClick() {
        if (icon == "regenerate")
            value = Math.random().toString(32).substring(2, 8);
        else if (icon == "close")
            value = "";
    }
</script>

<div class="bg-white rounded-lg focus-within:border-blue-600 border-gray-300 border-2 py-3 px-4 flex gap-2 text-lg font-bold transition-colors duration-300 ease-in-out {value == (null || "") ? "border-red-500" : ""}">
    <div class="text-blue-600 flex justify-center items-center">
        <svg class="h-[1.25em] w-[1.25em]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>              
    </div>
    <input class="outline-none placeholder:text-gray-300 text-gray-500" type="text" placeholder={placeholder} bind:value={value}>
    <button type="button" on:click={handleClick} class="flex items-center hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors duration-100">
        {#if icon === "close"}
            <svg class="h-[1em] w-[1em] text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>    
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-[1em] w-[1em] text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>        
        {/if}       
    </button>
</div>