export default function test(props) {
    const {hello} = props;
    return <div>
        <h1>성공</h1>
        {
            hello.map(
                (item)=><>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </>
            )

        }

        <form method="POST" action="./api/posts">
            title : <input name="title" id="title"></input> <br></br>
            content : <input name="content" id="content"></input>  <br></br>
            <input type="submit"></input>
        </form>
    </div>
}


export async function getStaticProps(context){
    const res = await fetch("http://localhost:3000/api/hello");
    const hello = await res.json();
    
    return {
        props: {hello}
    };
}




