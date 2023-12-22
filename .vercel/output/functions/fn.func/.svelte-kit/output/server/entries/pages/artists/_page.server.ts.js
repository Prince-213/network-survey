import { faker } from "@faker-js/faker";
import { s as supabase } from "../../../chunks/supabaseClient.js";
const load = async () => {
  Array.from({ length: 15 }, (_, i) => ({
    id: i,
    name: faker.person.fullName(),
    age: Math.floor(Math.random() * 50),
    device: Math.floor(Math.random() * 4),
    rating: Math.floor(Math.random() * 5),
    network: Math.floor(Math.random() * 4),
    former: Math.floor(Math.random() * 3),
    data: Math.floor(Math.random() * 1e3),
    revenue: Math.floor(Math.random() * 1e10),
    calls: Math.floor(Math.random() * 100)
  }));
  let { data, error } = await supabase.from("customers").select("*");
  return {
    data: data ?? []
  };
};
export {
  load
};
