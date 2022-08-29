/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { HandlerContext } from "$fresh/server.ts";
import { supabaseClient, supabaseTable, supabaseTableItems } from "supabase";
import "dotenv";

interface LogoProps {
    b2b_domain: string;
    url: string;
}

const sbclient = new supabaseClient(
    Deno.env.get("SUPABASE_API_URL"),
    Deno.env.get("SUPABASE_ANON_KEY")   
);

const sbTableItems = new supabaseTableItems(sbclient, "logos");

const sbTableItem = await sbTableItems.get('b2b_domain', '740esquire.com'); 

console.log( sbTableItem );

export default function Logo(props: LogoProps) {

   props.url = sbTableItem[0].url;

    return (
        <img src={ props.url }></img>
    );
  };