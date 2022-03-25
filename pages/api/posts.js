import { db } from "../../lib/db";

export default (req,res)=>{
    try{
        switch(req.method){
            case "POST":{
                save(req,res) 
                return res.status(200).json({name:"db전송 성공"})
            }
        }
        
    }
    catch{
        res.status(200).json({name:"db전송 실패"});
    }
    return res.json({name:"정상적인 경로로 들어온게 아닙니다."})
}


const save = async(req,res )=>{
    const {title,content,password} = req.body
    const result = await db.query("insert into posts set ?",{
        title,
        content,
    });
    return res.result
}



// import { sql_query } from "../../lib/db";

// const handler = async (_, res) => {
//     try{
//         const results = await sql_query('select * from posts ORDER BY title DESC LIMIT 10');
//         return res.json(results);
//     }

//     catch (e){
//         res.status(500).json({ message: e.message });
//     }
// }




// export default handler;