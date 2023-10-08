import { GetTablePays } from '$lib/database.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const res = await GetTablePays();
    const table = {"values":res};
    if (table)
        return table;
    throw error(404, 'Not found');
}