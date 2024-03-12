export default function Inpunt({label, id, type, placeholder, className}){
    return(
       <div className={className + " flex flex-col"}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} placeholder={placeholder} />
       </div>
    )
}