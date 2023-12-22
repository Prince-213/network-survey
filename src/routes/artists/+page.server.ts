import type { PageServerLoad } from './$types';
import { faker } from '@faker-js/faker';
import { fail } from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient.js";

export const load = (async () => {

    type item = {
		id: number;
		name: string;
		age: number;
		device: number;
		rating: number;
		network: number;
		former: number;
		data: number;
		revenue: number;
		calls: number;
	}[];

    let items: item;

    let objects = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        name: faker.person.fullName(),
        age: Math.floor(Math.random() * 50),
        device: Math.floor(Math.random() * 4),
        rating: Math.floor(Math.random() * 5),
        network: Math.floor(Math.random() * 4),
        former: Math.floor(Math.random() * 3),
        data: Math.floor(Math.random() * 1000),
        revenue: Math.floor(Math.random() * 10000000000),
        calls: Math.floor(Math.random() * 100)
    }));

    
    let { data, error } = await supabase
    .from('customers')
    .select('*')
        

    return {
        data: data ?? []
    };
}) satisfies PageServerLoad;