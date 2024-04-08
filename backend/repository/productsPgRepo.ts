import pg, { QueryResult } from 'pg';
import { Pants, TPants } from '../entities/entities';
const {Pool} = pg;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "password",
    max: 10,

});


export const getAllPantsQuery = async (): Promise<TPants[]> =>  {
    try{
        const start = Date.now()
        const query = "SELECT id, model, size, price FROM pants"
        const result = await pool.query({text: query})
        const duration = Date.now() - start + "ms"
        console.log("executed query", {statement: query, duration, rows: result.rowCount })
        return result.rows
    }
    catch (error) {
        console.error("error performing query", {error})
        const emptyPants = {} as TPants
        return  [emptyPants]
    }
}