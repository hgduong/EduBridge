// pages/Dashboard.jsx
import StatsCard from '../components/StatsCard';
import Chart from '../components/Chart';

const Dashboard = () => (
  <div style={{ padding: '0.5rem' }}>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <StatsCard title="Total Users" value="450,000" percentage={59.3} extra="You made an extra 35,000 this year" />
      <StatsCard title="Total Request Tutor" value="78,250" percentage={70.5} extra="You made an extra 8,900 this year" />
      <StatsCard title="Total Request Customer" value="18,800" percentage={27.4} extra="You made an extra 1,943 this year" />
      <StatsCard title="Total Sales" value="$35,078" percentage={-27.4} extra="You made an extra $20,395 this year" />
    </div>
    <h3>Revenue Report</h3>
    <Chart />
    <h3>Income Overview</h3>
    <p>This week: $7,650</p>
  </div>
);

export default Dashboard;
