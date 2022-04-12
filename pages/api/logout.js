import cookie from "cookie"
import { TOKEN_NAME } from "./login_cookie";

export default function removeTokenCookie(req,res) {          
    res.setHeader(
        "Set-Cookie",
        cookie.serialize(TOKEN_NAME,'',{
          maxAge: -1,
          path: '/',
        })
    );
  return res.json({success:true})
}