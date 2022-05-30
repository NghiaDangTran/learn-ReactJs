import React,{useState} from "react";
export default function useHandleInput(initialValue) {
    const [val, setVal] = useState(
        initialValue
    );
    const handleInputChange = (e) => {
        setVal({
            ...val,
          
            [e.target.id]: e.target.type === "checkbox" ? e.target.checked : e.target.value,

        });
    }

    return {val,handleInputChange}

}