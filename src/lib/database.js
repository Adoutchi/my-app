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
  console.log(req);
  return req;
}

console.log(GetTablePays());

