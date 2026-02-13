export default function Button({text}: {text: string}) {
return(
    <button className="myButton bg-yellow-400 gap-400px">
     {text}
    </button>
)
}