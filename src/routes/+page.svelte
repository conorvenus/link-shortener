<script>
import ShortenerList from "$lib/ShortenerList.svelte";
import ShortenerForm from "../lib/ShortenerForm.svelte";
</script>

<main class="w-full h-screen grid place-items-center relative snap-start">
    <ShortenerForm />
    <a href="#shortener-list" class="absolute bottom-6 text-blue-600 hover:scale-125 transition-transform duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.25" stroke="currentColor" class="w-10 h-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>          
    </a>
</main>
<section class="grid place-items-center min-h-screen p-10 snap-start" id="shortener-list">
    <ShortenerList />
</section>