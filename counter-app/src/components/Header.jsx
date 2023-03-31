export default function Header(){


    return(
        <div>
            <h1>{import.meta.env.VITE_API_URL}</h1>
            <h2>This is an example of using environmental variables. This is accessible everywhere in this app!</h2>
        </div>
    )
}