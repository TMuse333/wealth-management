import React, { useEffect, useState } from "react"
import OptionsBar from "../optionsBar/optionsBar"



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

    const [isMobile, setIsMobile] = useState(false)

useEffect(()=> {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 655)
    }
    handleResize()

    window.addEventListener('resize',handleResize)

    return () => {
        window.removeEventListener('resize',handleResize)
    }
})


    return (
        <section>
            <OptionsBar
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            options={options}
            />

            <section className="sm:grid sm:grid-cols-2
            md:grid-cols-3 max-w-[1400px] ml-auto mr-auto">
                {serviceOptions.map((service,index) => (
                    <div
                    key={index}
                    className={`w-[90vw] ml-auto mr-auto 
                    bg-gray-800 border border-white-200
                    mb-4  pb-8 relative z-300
                    sm:w-[40vw] sm:h-[45vw] sm:max-h-[450px]
                    max-w-[430px] md:w-[30vw] transition-transform
                    ${ !isMobile ? 'hover:scale-[1.05] glow' : ''}`}>
                        

                        {service.halfImage ? (
                            <>
                              <img src={service.image}
                              className='rounded-b-[2.5rem]
                              h-[50%] w-full object-cover mb-5'/>
                           
                                </>
                        ) : (
                            <>
                            <img src={service.image}
                            className='w-[60px]  h-[60px] 
                            object-cover ml-8
                            mb-4  sm:mt-14'
                            />
                            </>
                        )}
                         
                         <section className={`text-left pl-10 md:pl-4
                             ${!service.halfImage ? 'sm:mt-[5rem]' : ''} `}>
                          
                           <h1 className="mt-5 font-semibold
                           text-xl sm:text-2xl 
                           
                          ">{service.name}</h1>

                          <p className="text-gray-200 mt-5 sm:text-lg
                          ">{service.description}</p>

                          <p className={`text-blue-500 mt-5
                           sm:text-md ${!isMobile ? 'hover:text-blue-200 transition-colors' : ''}`}>Learn more &gt;</p>
                           </section>
                    </div>
                ))}
            </section>
        </section>
    )
}

export default OptionsGrid