import { useState } from "react";

import FreelancerCard from "./components/FreelancerCard";
import FreelancerForm from "./components/FreelancerForm";
import FreelancerStats from "./components/FreelancerStats";
import RateFilter from "./components/RateFilter";

const initialFreelancers = [
  { name: "Lina", skill: "designer", rate: 55, id: crypto.randomUUID() },
  { name: "Marcus", skill: "developer", rate: 70, id: crypto.randomUUID() },
  { name: "Jae", skill: "writer", rate: 45, id: crypto.randomUUID() },
];

function App() {
  const [freelancers, setFreelancers] = useState(initialFreelancers);
  const [filteredFreelancers, setFilteredFreelancers] = useState([]);
  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [rate, setRate] = useState("");
  const [maxRate, setMaxRate] = useState("");
  const [isFilterActive, setisFilterActive] = useState(false);

  const freelanceListToRender = isFilterActive
    ? filteredFreelancers
    : freelancers;

  function syncFreelancerState(newList) {
    setFreelancers(newList);

    if (maxRate.trim()) {
      const filtered = newList.filter(({ rate }) => rate <= Number(maxRate));
      setFilteredFreelancers(filtered);
    } else {
      setFilteredFreelancers([]); // Reset if filter not active
    }
  }

  function handleAdd() {
    const newFreelancer = {
      name: name.trim(),
      skill: skill.trim(),
      rate: Number(rate),
      id: crypto.randomUUID(),
    };

    // This is standard React practice: don't mutate state directly — make a new array, then update.
    const updated = [...freelancers, newFreelancer];
    syncFreelancerState(updated);

    // Clear the form
    setName("");
    setSkill("");
    setRate("");
  }

  function handleRemove(userIdToRemove) {
    const updatedList = freelancers.filter(({ id }) => id !== userIdToRemove);
    syncFreelancerState(updatedList);
  }

  function handleMaxRateFilter(maxRateToFilterBy) {
    setisFilterActive(true);
    const updatedList = freelancers.filter(
      ({ rate }) => maxRateToFilterBy >= rate
    );

    setFilteredFreelancers(updatedList);
  }

  function clearFilterList() {
    setFilteredFreelancers([]);
    setMaxRate("");
    setisFilterActive(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 font-sans flex justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Freelancer Manager</h1>
        <ul>
          {freelanceListToRender.map(({ id, name, skill, rate }) => (
            <FreelancerCard
              key={id}
              name={name}
              skill={skill}
              rate={rate}
              onRemove={() => handleRemove(id)}
            />
          ))}
        </ul>

        {isFilterActive && freelanceListToRender.length === 0 && (
          <p className="text-red-600 font-semibold mb-4">
            No freelancers found under this rate. 😭
          </p>
        )}

        <FreelancerStats freelanceListToRender={freelanceListToRender} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FreelancerForm
            name={name}
            setName={setName}
            skill={skill}
            setSkill={setSkill}
            rate={rate}
            setRate={setRate}
            handleAdd={handleAdd}
          />

          <RateFilter
            maxRate={maxRate}
            setMaxRate={setMaxRate}
            isFilterActive={isFilterActive}
            handleMaxRateFilter={handleMaxRateFilter}
            clearFilterList={clearFilterList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
