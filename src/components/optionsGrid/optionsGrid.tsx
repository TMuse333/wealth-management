// MyComponent.tsx

import React, { useState, useEffect } from 'react';
import OptionsBar from '../optionsBar/optionsBar'
import {motion, AnimatePresence} from 'framer-motion'


interface ServiceOption {
    name: string;
    description: string;
    image: string;
    halfImage: boolean;
}

interface Service {
    name: string;
    serviceOptions: ServiceOption[];
}

interface OptionsGridProps {
    options: Service[];
    barOptions: {
        name: string;
        description: string;
    }[];
}

const MyComponent: React.FC<OptionsGridProps> = ({ options, barOptions }) => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 655);

    const [selectedOption, setSelectedOption] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 655);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
        <OptionsBar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        options={barOptions}
        />
        <AnimatePresence mode='wait'>

     
        <section

         className="sm:grid sm:grid-cols-2
            md:grid-cols-3 max-w-[1400px] ml-auto mr-auto">
            {options[selectedOption].serviceOptions.map((service, index) => (
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
                           <motion.img
                        //    key={selectedOption}
                        //    initial={{opacity:0.5}}
                        //    animate={{opacity:1,
                        // transition:{duration:1.5}}}
                        //    exit={{opacity:0.5,
                        // transition:{
                        //     duration:1
                        // }}}

                            src={service.image}
                           className='rounded-b-[2.5rem]
                           h-[50%] w-full object-cover mb-5'/>
                        
                             </>
                     ) : (
                         <>
                         <motion.img
                    //      key={selectedOption}
                    //      initial={{opacity:0}}
                    //      animate={{opacity:1,
                    //   }}
                    //      exit={{opacity:0,
                    // }}

                          src={service.image}
                         className='w-[60px]  h-[60px] 
                         object-cover ml-8
                         mb-4  sm:mt-14'
                         />
                         </>
                     )}
                      
                      <section 
                      key={selectedOption}
                //       initial={{opacity:0}}
                //       animate={{opacity:1,
                //   }}
                //       exit={{opacity:0,
                //    }}
                //    transition={{duration:1}}
                      className={`text-left pl-10 md:pl-4 
                          ${!service.halfImage ? 'sm:mt-[5rem]' : ''} `}>
                       
                        <h1
                    //      key={selectedOption}
                    //      initial={{opacity:0}}
                    //      animate={{opacity:1,
                    //  }}
                    //      exit={{opacity:0,
                    //   }}
                    //   transition={{duration:1.5}}
                         className=" font-semibold
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
                </AnimatePresence>
   
        </section>
    );
};

export default MyComponent;
