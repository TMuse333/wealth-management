import { Solutions } from "../solutions/solutions"
import { solutionsOptions, solutionsDetails,solutionsCardDetails
,optionsGridServiceBar, serviceGridData } from "../../data/data"
import OptionsGrid from "../optionsGrid/optionsGrid"

import wealthImg from '../../media/wealth-management-1.jpeg'
import moneyball from '../../media/futuristic-money-ball-removebg-preview.png'
export const Homepage = () => {

  serviceGridData[0].image = wealthImg
  serviceGridData[1].image = moneyball
  serviceGridData[2].image = moneyball
  serviceGridData[3].image = moneyball
  // serviceGridData[4].image = moneyball

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