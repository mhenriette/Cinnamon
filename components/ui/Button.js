function Button({title, style}){
    return(
        <button className={`bg-[#5135ff] text-white py-3 px-5  text-center w-small ${style}`}>{title}</button>
    );
}
export default Button