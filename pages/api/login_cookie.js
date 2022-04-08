import cookie, { parse } from 'cookie'
import Iron from '@hapi/iron'
import { findUser,validatePassword } from './join'

const TOKEN_NAME = 'token'
const TOKEN_SECRET = process.env.TOKEN_SECRET

export const MAX_AGE = 60 * 60 * 8 


export default async function setTokenCookie(req,res){
  const {email,password} = req.body;

  const user =  await findUser({ email: email });
  console.log(user, await validatePassword(user, password));

  if (user && (await validatePassword(user, password))) {
      const session = {
          id: user.id,
          email: user.email,
          name: user.name,
      };
      const createdAt = Date.now()
      const obj = {session, createdAt, maxAge: MAX_AGE }
      const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)

      res.setHeader(
          "Set-Cookie",
          cookie.serialize(TOKEN_NAME,token,{
            maxAge: MAX_AGE,  
            expires: new Date(Date.now() + MAX_AGE * 1000),
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
          })
      );
      res.json({ success: true });
      const test = await getToken(req)
      console.log(test)
      console.log(test.session.email)
      return


  }


  res.json({ success: false });

}




// export function removeTokenCookie(res) {            로그아웃
//   const cookie = serialize(TOKEN_NAME, '', {
//     maxAge: -1,
//     path: '/',
//   })

//   res.setHeader('Set-Cookie', cookie)
// }

export function parseCookies(req) {

  if (req.cookies) {
    return req.cookies
  }

  const cookie = req.headers?.cookie
  return parse(cookie || '')
}

export async function getToken(req) {
  const cookies = parseCookies(req)
  const token = cookies[TOKEN_NAME]
  if(!token){
    return
  }

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000           

  if (Date.now() < expiresAt){
    return session
  }


  return session
}
