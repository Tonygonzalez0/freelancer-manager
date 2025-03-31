function FreelancerStats({ freelanceListToRender }) {
  const averageRate = freelanceListToRender.length === 0
  ? 0
  : (
      freelanceListToRender.reduce((acc, { rate }) => acc + rate, 0) /
      freelanceListToRender.length
    ).toFixed(2);

  return (
    <div className="text-sm text-gray-600 mb-6">
      <p>
        <span className="font-semibold text-gray-800">
          {freelanceListToRender.length}
        </span>{" "}
        freelancers listed
      </p>
      <p>
        Average rate:{" "}
        <span className="font-semibold text-gray-800">
          ${averageRate}
        </span>
      </p>
    </div>
  );
}

export default FreelancerStats;
