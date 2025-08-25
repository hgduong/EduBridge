import React from 'react';
import WebButton from './WebButton';
import AppIcon from '../../config/AppIcon';
import '../../App.css';

const WebHorizontalButtons = () => {
  const buttonsData = [
    { name: 'math', text: 'Toán' },
    { name: 'literature', text: 'Tiếng Việt' },
    { name: 'chemistry', text: 'Hóa học' },
    { name: 'physics', text: 'Vật lý' },
    { name: 'geography', text: 'Địa lý' },
  ];

  return (
    <div className="horizontal-buttons-wrapper" style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '8px 0' }}>
      {buttonsData.map((btn, index) => (
        <WebButton
          key={index}
          icon={<AppIcon name={btn.name} color="var(--color-primary)" />}
          text={btn.text}
          width="140px"
          height="48px"
          backgroundColor="var(--color-white)"       // khi chưa hover
          textColor="var(--color-primary)"           // khi chưa hover
          borderColor="var(--color-primary)"         // khi chưa hover
          hoverBackgroundColor="var(--color-primary)"// khi hover
          hoverTextColor="var(--color-white)"        // khi hover
          hoverBorderColor="var(--color-primary)"    // khi hover
          borderRadius="24px"
        />
      ))}
    </div>
  );
};

export default WebHorizontalButtons;