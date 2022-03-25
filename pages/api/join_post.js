import { db } from "../../lib/db";

export default(req,res)=>{
    try{
        switch(req.method){
            case "POST":{
                try{
                    join(req,res)
                    return res.json({name:"db전송 성공"})
                }
                catch{
                    return res.status(200).json({name:"db전송 실패"})
                }
                return res.status(200).json({name:"db전송 실패"})
            }
        }
    }
    catch{
        return res.status(200).json({name:"db전송 실패"})
    }
    return res.json({name:"정상적인 경로로 들어온게 아닙니다."})
}

const join = async(req,res)=>{
    const {name,id,password} = req.body 
    const result = await db.query("insert into user set ?",{
        name,
        id,
        password
    });
    return res.result
}