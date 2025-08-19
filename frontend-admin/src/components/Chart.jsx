// components/Chart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', visitors: 400 },
  { name: 'Tue', visitors: 300 },
  { name: 'Wed', visitors: 500 },
  { name: 'Thu', visitors: 700 },
  { name: 'Fri', visitors: 600 },
];

const Chart = () => (
  <ResponsiveContainer border="1px solid black"width="90%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="visitors" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
