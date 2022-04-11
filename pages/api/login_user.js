import { findUser } from "./join"
import { TOKEN_NAME,TOKEN_SECRET } from "./login_cookie"
import { parse } from 'cookie'
import Iron from '@hapi/iron'


export default async function viewer(req,res){
  try{

    // const cookies = parse(req.headers?.cookie || '')
    // const token = cookies[TOKEN_NAME] //getserversideprops로 호출하면 token을 못가져옴
    // console.log(token) 그냥 여기 token을 로그인할때마다 db에 저장해서 가져오는 미친 비효율 생각중
                        // 로그아웃할때 삭제시키면 되지않을까?
                        //다중 사용자가 많으면 얼마나 많겠어...? 보안은...암호화해서 넣으면 되지않을까?
    

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


