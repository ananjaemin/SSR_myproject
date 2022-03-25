import { db } from "../../lib/db";

export default async function handler(req,res){
    try{
        const rows = await db.query("select * from posts");
        res.json(rows)
        return 
    }
    catch{
        res.status(200).json({name: 'db불러오기 실패'});
    }
    return res.json({name:"정상적인 경로로 들어온게 아닙니다."})
}
