import React from "react";

const Button = ({title, ...rest}) => {
    return (
        <div>
            <button  {...rest} className="bg-[#FC2947] text-white  px-6 py-2 rounded-full">
                {title}
            </button>
        </div>
  
    )
}

export default Button