import { s as supabase } from "../../chunks/supabaseClient.js";
const load = async () => {
  let { data, error } = await supabase.from("customers").select("*");
  let two = (await supabase.from("customers").select("data, calls, revenue, sms").eq("network", "2G")).data;
  let three = (await supabase.from("customers").select("data, calls, revenue, sms").eq("network", "3G")).data;
  let four = (await supabase.from("customers").select("data, calls, revenue, sms").eq("network", "4G")).data;
  let five = (await supabase.from("customers").select("data, calls, revenue, sms").eq("network", "5G")).data;
  let bundle = (await supabase.from("customers").select("plan").eq("plan", "Bundle Plan")).data;
  let family = (await supabase.from("customers").select("plan").eq("plan", "Family Plan")).data;
  let premium = (await supabase.from("customers").select("plan").eq("plan", "Premium Plan")).data;
  return {
    data: data ?? [],
    two: two ?? [],
    three: three ?? [],
    four: four ?? [],
    five: five ?? [],
    bundle: bundle ?? [],
    family: family ?? [],
    premium: premium ?? []
  };
};
export {
  load
};
