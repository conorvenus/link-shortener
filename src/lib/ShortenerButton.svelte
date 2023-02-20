<script lang="ts">
    type Icon = "shorten";

    export let placeholder: string;
    export let icon: Icon;
</script>

<button type="submit" class="bg-blue-600 rounded-lg py-3 text-white font-bold text-xl flex justify-center items-center gap-2 hover:text-blue-600 hover:bg-transparent border-2 border-blue-600 transition-colors duration-300 ease-in-out">
    {#if icon === "shorten"}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[1em] h-[1em]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>   
    {/if}           
    {placeholder}
</button>