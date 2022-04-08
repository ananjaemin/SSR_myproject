import { findUser } from './join';
import { getToken } from './login_cookie'

export default async function viewer(req,res){
  try{
    const session = await getToken(req)
    const user = await findUser({email:session.session.email})
    
    if(session){
      return res.json({name:user.email})
    }

  }catch{
    return res.json({name:"세션이 없거나 정상적이지 않음"})
  }
}


