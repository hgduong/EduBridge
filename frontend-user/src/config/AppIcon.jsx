import React from 'react';
import IconMath from '../assets/icons/icon_math.svg';
import IconLiterature from '../assets/icons/icon_literature.svg';
import IconPhysics from '../assets/icons/icon_physics.svg';
import IconChemistry from '../assets/icons/icon_chemistry.svg';
import IconGeography from '../assets/icons/icon_geography.svg';
import IconPhone from '../assets/icons/icon_phone.svg';
import IconLocation from '../assets/icons/icon_location.svg';

const AppIcon = ({ name, color, size = 24 }) => {
  switch (name) {
    case 'math':
      return <img src={IconMath} width={size} height={size} alt="math" />;
    case 'literature':
      return <img src={IconLiterature} width={size} height={size} alt="literature" />;
    case 'physics':
      return <img src={IconPhysics} width={size} height={size} alt="physics" />;
    case 'chemistry':
      return <img src={IconChemistry} width={size} height={size} alt="chemistry" />;
    case 'geography':
      return <img src={IconGeography} width={size} height={size} alt="geography" />;
    case 'phone':
      return <img src={IconPhone} width={size} height={size} alt="phone" />;
    case 'location':
      return <img src={IconLocation} width={size} height={size} alt="location" />;
    default:
      return null;
  }
};

export default AppIcon;
