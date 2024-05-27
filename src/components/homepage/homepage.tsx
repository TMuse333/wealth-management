import { Solutions } from "../solutions/solutions"
import { solutionsOptions, solutionsDetails,solutionsCardDetails
,optionsGridServiceBar, serviceGridData } from "../../data/data"
import OptionsGrid from "../optionsGrid/optionsGrid"



export const Homepage = () => {

    return (
        <section className="absolute top-0 left-0
        w-screen bg-blue-200">
            
          <Solutions
          options={solutionsOptions}
          solutionsDetails={solutionsDetails}
          solutionsCardDetails={solutionsCardDetails}
          />

          <OptionsGrid
          serviceOptions={serviceGridData}
          options={optionsGridServiceBar}
          />
         
        </section>
    )
}