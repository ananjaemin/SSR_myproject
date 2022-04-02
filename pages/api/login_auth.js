import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './login_cookie'

const TOKEN_SECRET = process.env.TOKEN_SECRET

export async function getLoginSession(req) {
  const token = getTokenCookie(req)

  if (!token) return

  const session = await Iron.unseal(token, TOKEN_SECRET, Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000


  if (Date.now() < expiresAt) {
    return session
  }
}
