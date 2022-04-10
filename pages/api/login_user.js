import { findUser } from "./join"
import { TOKEN_NAME,TOKEN_SECRET } from "./login_cookie"
import { parse } from 'cookie'
import Iron from '@hapi/iron'

export default async function viewer(req,res){
  try{
    const cookies = parse(req.headers?.cookie || '')
    const token = cookies[TOKEN_NAME]
    
    const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)

    const user = await findUser({email:session.email})

    return res.json({name:user.email})

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


