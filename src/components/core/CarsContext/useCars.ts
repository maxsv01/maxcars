import { useContext } from 'react';
import CarsContext from '@/components/core/CarsContext/CarsContext';

const useCars = () => {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error('useCars must be used within a CarsProvider');
  }
  return context;
};

export default useCars;
