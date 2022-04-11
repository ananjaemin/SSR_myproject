import { db } from "../../lib/db"

export default async function adminviewer(req,res){
    const result = await db.query("select * from player")
    const show = res.json(result)
    return show
}
