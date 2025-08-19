// components/StatsCard.jsx
import { Card } from 'antd';

const StatsCard = ({ title, value, percentage, extra }) => (
  <Card style={{ width: 250, margin: '1rem' }}>
    <h3>{title}</h3>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
    <p style={{ color: percentage > 0 ? 'green' : 'red' }}>
      {percentage > 0 ? `↑ ${percentage}%` : `↓ ${Math.abs(percentage)}%`}
    </p>
    <small>{extra}</small>
  </Card>
);

export default StatsCard;
