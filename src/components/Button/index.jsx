import "./styles.css";

export default function Button({children, addClassName}){

    return(
        <button className={addClassName + " border-solid border-2 py-4 px-10"}>
            {children}
        </button>
    );
}