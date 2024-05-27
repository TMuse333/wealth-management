import React, { useState } from "react"
import OptionsBar from "../optionsBar/optionsBar"

interface OptionsBarProps{

  
}

interface OptionsGridProps {
    serviceOptions:{
        name:string,
        description:string,
        image:string,
        halfImage:boolean
    }[],
    options:{
        name:string
        description:string
    }[]
    

}




const OptionsGrid:React.FC<OptionsGridProps> = (
    {serviceOptions,options}
) => {

    const [selectedOption, setSelectedOption] = useState(0)


    return (
        <section>
            <OptionsBar
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
            />

            <section className="">
                {serviceOptions.map((service,index) => (
                    <div
                    key={index}
                    className='w-[90vw] ml-auto mr-auto'>
                            slatty
                    </div>
                ))}
            </section>
        </section>
    )
}

export default OptionsGrid