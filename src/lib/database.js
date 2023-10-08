import { sql } from "@vercel/postgres";

/**
 * @param {string} name
 */
export async function GetPays(name) {
    const req = (await sql `SELECT Taille FROM pays WHERE Nompays=${name}`).rows[0];
    if(req !== undefined) {
      return req;
    }
    return req;
}

/**
 * @param {number} id
 */
export async function GetIdPays(id) {
  const req = (await sql `SELECT * FROM pays WHERE Id=${id}`).rows[0];
  return req;
}


export async function GetTablePays() {
  const req = (await sql `SELECT * FROM pays`).rows;
  return req;
}

console.log(await GetTablePays());

/*
export const GetTablePays = async () => {
  return sql `SELECT * FROM pays`;
}
*/


/**
 * @param {number} number
 */
export function NumberCarre(number) {
  return number * number;
}


//console.log(GetPays("France"));

