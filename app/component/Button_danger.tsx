export default function ButtonDanger({text}: {text: string}) {
    return(
        <button className="myButton bg-red-400 px-4 rounded-tl gap-400px">
         {text}
        </button>
    )
}