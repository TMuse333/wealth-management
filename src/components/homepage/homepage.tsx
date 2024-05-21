import { Solutions } from "../solutions/solutions"
import { solutionsOptions, solutionsDetails,solutionsCardDetails } from "../../data/data"



export const Homepage = () => {

    return (
        <section className="absolute top-0 left-0
        w-screen bg-white">
            
          <Solutions
          options={solutionsOptions}
          solutionsDetails={solutionsDetails}
          solutionsCardDetails={solutionsCardDetails}
          />
         
        </section>
    )
}