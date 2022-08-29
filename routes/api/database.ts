import { HandlerContext } from "$fresh/server.ts";
import { supabaseClient, supabaseTable, supabaseTableItems } from "supabase";
import "dotenv";



const sbclient = new supabaseClient(
    Deno.env.get("SUPABASE_API_URL"),
    Deno.env.get("SUPABASE_ANON_KEY")   
);

const sbTableItems = new supabaseTableItems(sbclient, "logos");

const sbTableItem = await sbTableItems.get('b2b_domain', '740esquire.com'); 

console.log( sbTableItem );

export const handler = (_req: Request, _ctx: HandlerContext): Response => {

    const url = sbTableItem[0].url;

    return new Response(
       url
    );
  };