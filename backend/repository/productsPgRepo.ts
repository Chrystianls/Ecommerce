import pg, { Pool, QueryResult } from 'pg';
import { Pants, TPants } from '../entities/entities';

const pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "password",
    max: 10,

});

export class PantsRepository {
    pool: Pool
    constructor(pool: Pool){
        this.pool = pool
    }    
    getAll = async (): Promise<TPants[]> =>  {
        try{
            const start = Date.now()
            const query = "SELECT id, model, size, price FROM pants"
            const res = await this.pool.query({text: query})
            const duration = Date.now() - start + "ms"
            console.log("executed query", {statement: query, duration, rows: res.rowCount })
            return res.rows
        }
        catch (error) {
            console.error("error performing query", {error})
            const emptyPants = {} as TPants
            return  [emptyPants]
        }
    }
    getById = async (id: number) => {
        const query = {
            text: "SELECT id, model, size, price from pants WHERE id = $1",
            values: [id]
        }
        const start = Date.now()
        const res = await this.pool.query(query)
        const duration = Date.now() - start + "ms"
        console.log("executed query", {statement: query, duration, rows: res.rowCount })
        return res.rows
    }
}
