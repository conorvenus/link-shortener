<script lang="ts">
import ShortenerButton from "./ShortenerButton.svelte";
import ShortenerInput from "./ShortenerInput.svelte";
import { supabase } from "../supabase";
import "../app.css";

let longUrl: string;
let shortenedUrl: string;

let statusMessage: {
    error: boolean
    message: string
};

async function onSubmit() {
    if (!longUrl || !shortenedUrl) {
        statusMessage = {
            error: true,
            message: "Make sure all the respective fields are completed."
        }
        return
    } 

    if (!longUrl.match(/^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)) {
        statusMessage = {
            error: true,
            message: "Please enter a valid URL starting with \"http://\" or \"https://\" followed by a valid domain name."
        }
        return 
    } 
    
    if (!shortenedUrl.match(/^[a-zA-Z0-9-]{3,10}$/)) {
        statusMessage = {
            error: true,
            message: "Please enter a slug that is between 3 and 10 characters, containing only alphanumeric characters."
        }
        return
    }

    const { error } = await supabase.from("links").insert({ long_url: longUrl, shortened_url: shortenedUrl })

    if (error) {
        let errorMessage;
        if (error.code === "23505") {
            errorMessage = "A shortened link under that slug already exists."
        } else
            errorMessage = error.message
        statusMessage = {
            error: true,
            message: errorMessage
        }
    } else {
        let links: {shortenedUrl: string, longUrl: string}[] = JSON.parse(localStorage.getItem("links") ?? "[]");
        links.push({shortenedUrl: shortenedUrl, longUrl: longUrl});
        localStorage.setItem("links", JSON.stringify(links));
        statusMessage = {
            error: false,
            message: "Nice! We shortened it!"
        }
    }
}
</script>


<form on:submit|preventDefault={onSubmit} class="text-center">
    <fieldset class="flex justify-center align-center flex-col gap-4 w-fit mx-auto">
        <ShortenerInput placeholder="Your URL" bind:value={longUrl} icon="close" />
        <ShortenerInput placeholder="Shortened URL" bind:value={shortenedUrl} icon="regenerate" />
        <ShortenerButton placeholder="Shorten" icon="shorten" />
    </fieldset>
    <span class="{statusMessage?.error ? "text-red-500" : "text-blue-600"} max-w-[75%] mt-5 inline-block font-bold">{statusMessage?.message ?? ""}</span>
</form>