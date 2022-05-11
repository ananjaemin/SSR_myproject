import { findUser } from "./join"
import { TOKEN_NAME,TOKEN_SECRET } from "./login_cookie"
import { parse } from 'cookie'
import Iron from '@hapi/iron'

//버린코드---------------------------------------------------------------------------------------

export default async function viewer(req,res){
  try{

    const cookies = parse(req.headers?.cookie || '')
    const token = cookies[TOKEN_NAME] //getserversideprops로 호출하면 token을 못가져옴
    // console.log(token)

    const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
    const user = await findUser({email:session.email})
    
    return user

  }catch{
    return res.json({name:"세션이 없거나 정상적이지 않음"})
  }
}




// export function parseCookies(req) {

//   if (req.cookies) {
//     return req.cookies
//   }

//   const cookie = req.headers?.cookie
//   return parse(cookie || '')
// }

// export function getTokenCookie(req) {
//   const cookies = parseCookies(req)
//   return cookies[TOKEN_NAME]
// }

// export async function getLoginSession(req) {
//   const token = getTokenCookie(req)
//   if(!token){
//     return
//   }

//   const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
//   //const expiresAt = session.createdAt + session.maxAge * 1000     

//   return session
// }


