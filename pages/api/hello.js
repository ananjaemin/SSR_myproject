import { db } from "../../lib/db";

export default async function handler(req,res){
    try{
        const rows = await db.query("select * from posts");
        return res.json(rows)
    }
    catch{
        res.status(200).json({name: '실패'});
    }
}
