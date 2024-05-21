import React, {useState} from "react"
import {motion, AnimatePresence, Variants} from 'framer-motion'
import {Link} from 'react-router-dom'
interface optionsProps {
    options: {
        name: string;
        description: string;
    }[];
    solutionsDetails: {
        aspects: {
            name: string;
            description: string;
        }[];
        solutions: {
            name: string;
            links: {
                name: string;
                destination: string;
            }[];
        };
    }[];
    solutionsCardDetails:{
        image:{
            src:string,
            alt:string
        },
        link:{
            destination:string,
            name:string
        },
        description:string
    }[]
    
}


export const Solutions:React.FC<optionsProps> = (

    {options, solutionsDetails,
        solutionsCardDetails}
) => {

    const [selectedOption, setSelectedOption]
    = useState<number>(0)

    return (
        <section className="bg-[#FAFAFA] relative">
            <SolutionsOptions
            options={options}
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
            />
            <AnimatePresence mode='wait'>
        <section className="flex flex-col
        md:flex-row  ml-auto mr-auto
        w-screen md:w-[90vw] max-w-[1300px]">
          <motion.article
            key={selectedOption}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, transition:{
                delay:0.3
            }  }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.8 }}
           
            className=" md:w-[70vw]
           "
          >
            <h1 className="text-left pl-5 text-black text-2xl mb-4">
                {solutionsDetails[selectedOption].aspects[0].name}</h1>
            <p className="text-left ml-auto mr-auto pl-5 pr-5">
                {solutionsDetails[selectedOption].aspects[0].description}</p>

            <h1 className=" pl-5 mt-5 text-left text-black text-2xl mb-4">{solutionsDetails[selectedOption].aspects[1].name}</h1>
            <p className="text-left ml-auto mr-auto pl-5 pr-5">{solutionsDetails[selectedOption].aspects[1].description}</p>

            <h1 className="text-black text-2xl text-left  mt-5 pl-5">
            {solutionsDetails[selectedOption].solutions.name}
            </h1>
            <ul className="text-left pl-5 mt-5">
                
              
             
                {solutionsDetails[selectedOption].solutions.links.map((link,index) => (
                   <Link to={link.destination}>
                    <li
                     className="mb-2
                     text-blue-800
                     hover:text-blue-500
                     transition-colors">
                        {link.name}
                    </li>
                   </Link>
                ))}
            </ul>
            
          </motion.article>

                    <ArticleCard
                    solutionsCardDetails={solutionsCardDetails}
                    selectedOption={selectedOption}/>

        </section>
      </AnimatePresence>

<div className="flex flex-col justify-center items-center
mt-5">


      <button className="bg-blue-700 text-white
      p-5 text-xl !important rounded-3xl mt-5
      hover:scale-[1.1] transition-transform">
        See all of our solutions
      </button>

      <button className="bg-transparent text-blue-700
      p-5 text-xl rounded-3xl mt-5
      hover:bg-blue-700 hover:text-white
      transition-all !important ">
       Contact a professional
</button>
      </div>
        </section>
    )
}

interface OptionsBar {
    options:{
        name:string,
        description:string
    }[],
    setSelectedOption: React.Dispatch<React.SetStateAction<number>>
    selectedOption:number
}

    const SolutionsOptions:React.FC<OptionsBar> = (
        {options, setSelectedOption,
        selectedOption}
    ) => {

        return (
            <div className="bg-[#F8F8F8] w-screen flex
            relative h-[100px] overflow-x-hidden
            border border-b-4 mb-3">

                <div className="w-screen overflow-scroll
                 relative flex 
                "
                >

     

                {options.map((option, index) => (
                    <div key={index}
                    onClick={()=>setSelectedOption(index)}
                    className={`bg-[#F8F8F8]
                text-black 
                w-[33vw] h-[80px]
                min-w-[150px]
                absolute
                hover:bg-gray-100
                transition-colors
                ${index === selectedOption ? ' border-indigo-800 border-b-4' : ''}`}
                    style={{
                        transform:`translateX(${ index * 100}%)`
                    }}
                    >
                            <h2 className=""
                            style={{
                                fontWeight:selectedOption === index ? 'bold' : '500',
                                transition: 'font-weight 0.3s ease-in'
                            }}>{option.name}   </h2>
                            <p
                            style={{
                                fontWeight:selectedOption === index ? 'bold' : '500',
                                transition: 'font-weight 0.3s ease-in'
                            }}
                            >{option.description}</p>
                        </div>
                ))}
                           </div>
                
            </div>
        )

    }

    

   interface solutionsCardDetails{
    solutionsCardDetails:{
        image:{
            src:string,
            alt:string
        },
        link:{
            destination:string,
            name:string
        },
        description:string
    }[],
    selectedOption:number
   }
    const ArticleCard:React.FC<solutionsCardDetails>
     = ({solutionsCardDetails,selectedOption})=> {

        const cardVariants: Variants = {
            initial: {
              opacity: 0.1,
              scale: 1,
              transition: {}
            },
            animate: {
              opacity: 1,
              scale: 1,
              transition: {
               
                scale: { delay: 0.7 }
              }
            },
            exit: {
              opacity: 0,
              scale: 0.7,
              y: 20
            }
          };
          

        return (
            <AnimatePresence mode="wait">

            <motion.section className="rounded-2xl
            w-[80vw] h-[100vw] md:h-[50vw]
            ml-auto mr-auto
            max-h-[443px]
            border 
            glow bg-[#F0F0F0]
            max-w-[464px] relative"
            variants={cardVariants} // Apply the variants object
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            key={selectedOption}>
                <img className="w-full
                h-[60%] object-cover
                rounded-tl-2xl rounded-tr-2xl
                "
                src={solutionsCardDetails[selectedOption].image.src}
                alt={solutionsCardDetails[selectedOption].image.src}/>
                
                <article className=" h-[40%]
                 flex flex-col 
                ">
                    <Link to={solutionsCardDetails[selectedOption].link.destination}
                    className='self-start justify-start
                    mt-5 ml-auto mr-auto'>
                        <p className="text-blue-600 font-medium
                        hover:text-blue-400 transition-colors pl-2 pr-2
                        ">{solutionsCardDetails[selectedOption].link.name} &gt;</p>
                    </Link>
                    <p className="text-center mt-auto
                    mb-auto">{solutionsCardDetails[selectedOption].description}</p>
                </article>

            </motion.section>
            </AnimatePresence>
        )



    }