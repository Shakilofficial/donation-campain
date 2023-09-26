import { Chart } from "react-google-charts";

const Statistics = () => {
  const donations = [4, 8];
  const totalDonations = donations.reduce((a, b) => a + b, 0);

  const donationPercentages = donations.map((donationAmount) => {
    return ["Donation", (donationAmount / totalDonations) * 100];
  });

  const chartData = [["Category", "Percentage"], ...donationPercentages];

  const chartOptions = {
    title: "Donation Statistics",
    pieHole: 0.4,
    colors: ["skyblue", "red"],
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width={"100%"}
        height={"400px"}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default Statistics;
