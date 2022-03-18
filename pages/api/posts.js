import { db } from "../../lib/db";

export default async function handler(req,res){
    try{
        switch(req.method){
            case "POST":{
                save(req,res)
                return 
            }
        }
        
    }
    catch{
        res.status(200).json({name:"실패"});
    }
}

function gopage(){
    window.location.href="../test"
}

const save = async(req,res )=>{
    const {title,content} = req.body
    const result = await db.query("insert into posts set ?",{
        title,
        content
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