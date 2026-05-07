import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  function deletePlan(id) {
    const filteredPlans = travelPlans.filter((plan) => {
      return plan.id !== id;
    });

    setTravelPlans(filteredPlans);
  }

  return (
    <div>
      {travelPlans.map((plan) => {
        return (
          <div key={plan.id}>
            <h2>{plan.destination}</h2>

            <p>{plan.description}</p>

            <p>Price: ${plan.totalCost}</p>

            {plan.totalCost <= 350 && (
              <span>Great Deal </span>
            )}

            {plan.totalCost >= 1500 && (
              <span>Premium </span>
            )}

            {plan.allInclusive && (
              <span>All Inclusive</span>
            )}

            <br />

            <button onClick={() => deletePlan(plan.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;