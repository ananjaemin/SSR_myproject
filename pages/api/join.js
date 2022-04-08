import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import excuteQuery from "../../lib/db";

export default (req,res)=>{
    try{
        switch(req.method){
            case "POST":{
                try{
                    save(req,res) 
                    return res.status(200).json({name:"db전송 성공"})
                }catch{
                    return res.status(200).json({name:"db전송 실패"})
                }
            }
        }
        
    }
    catch{
        return res.status(200).json({name:"db전송 실패"});
    }
    return res.json({name:"정상적인 경로로 들어온게 아닙니다."})
}


export const save = async(req,res)=>{
    const {name,email,password} = req.body
    const salt = crypto.randomBytes(16).toString('hex')
    const hash = crypto.pbkdf2Sync(password,salt,1000,64,'sha512').toString('hex')
    const user = {
        id: uuidv4(),
        name,
        createdtime: moment().format( 'YYYY-MM-DD HH:mm:ss'),
        email,
        hash,
        salt,
    }

    const result = await excuteQuery({
        query: 'INSERT INTO player (id , name, createdtime, email, hash, salt) VALUES(?, ?, ?, ?, ?, ?)',
        values: [user.id,user.name, user.createdtime.toString(), user.email, user.hash, user.salt],
    });
    return res.result
}


export async function findUser({ email }) {
    try {
        const result = await excuteQuery({
            query: 'SELECT * FROM player WHERE email = ?',
            values: [ email ],
        });
        return result[0];
    } catch (res) {
        return res.json({ success: false }); //이메일 못찾으면 여기로 (현재 로그인에러임 화면에 말 띠우게할것)
    }
}


export async function validatePassword(user, inputPassword) {
    const inputHash = crypto.pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512').toString('hex');
    const passwordsMatch = user.hash === inputHash;
    return passwordsMatch;
}