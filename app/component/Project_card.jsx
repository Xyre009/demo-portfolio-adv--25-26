export default function Project_card({ title, date, info, src, alt}) {
    
    return (
       <div>
        <h2>{title}</h2>
        <h3>{info}</h3>
        <p>{info}</p>
        <img 
        src= {src}
        alt={alt}
        width={497}
        height={497}
        />
       </div>
    )
}
