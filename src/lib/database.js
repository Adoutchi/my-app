import { sql } from "@vercel/postgres";

/**
 * @param {string} name
 */
export async function GetPays(name) {
    const req = (await sql `SELECT * FROM pays WHERE Nompays=${name}`).rows[2];
    if(req !== undefined) {
      echo "name";
      return req;
    }
}

console.log(GetPays("France"));