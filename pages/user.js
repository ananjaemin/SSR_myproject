


export default function user() {
    return (
      <>
        <h1>로그인</h1>
        <h2></h2>
        <form method="POST" action="./api/login_cookie">
          email: <input name="email" type="email" className="text-black"/> <br></br>
          password: <input name="password" type="password" className="text-black"/> <br></br>
          <input type="submit"></input>
        </form>
      </>
    )
}


