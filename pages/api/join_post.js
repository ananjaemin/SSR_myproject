import { db } from "../../lib/db";

export default function handler(req,res){
    try{
        switch(req.method){
            case "POST":{
                join(req,res) 
                return res.status(200).json({name:"db전송 성공"})
            }
        }
    }
    catch{
        return res.status(200).json({name:"db전송 실패"})
    }
}

const join = async(req,res)=>{
    const {name,id,password} = req.body
    const result = await db.query("insert into member set ?",{
        name,
        id,
        password
    });
    return res.result
}