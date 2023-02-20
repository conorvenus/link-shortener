<script lang="ts">
    import { onMount } from "svelte";
    import ShortenerItem from "./ShortenerItem.svelte";

    let links: {shortenedUrl: string, longUrl: string}[] = [];

    onMount(() => {
        if (localStorage.getItem("links")) {
            links = JSON.parse(localStorage.getItem("links") ?? "[]")
        }
    })
</script>

<ul class="max-w-xl w-full flex flex-col gap-10">
    {#each links as link} 
        <ShortenerItem shortenedUrl={link.shortenedUrl} longUrl={link.longUrl} />
    {/each}
</ul>