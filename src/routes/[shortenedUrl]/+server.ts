import { supabase } from '../../supabase';
import { error as err } from '@sveltejs/kit';

export async function GET({params} : {params: {shortenedUrl: string}}) {
    const { data, error } = await supabase.from("links").select("long_url").eq("shortened_url", params.shortenedUrl).limit(1)

    if (error || !data || data.length == 0)
        throw err(404)

    return new Response(undefined, { status: 302, headers: { Location: data[0].long_url } });
} 