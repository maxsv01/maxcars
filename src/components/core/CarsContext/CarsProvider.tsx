import React, { useEffect, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import CarsContext from '@/components/core/CarsContext/CarsContext';
import { Car } from '@/types/CarTypes';

interface CarsProviderProps {
  children: React.ReactNode;
}

const CarsProvider = ({ children }: CarsProviderProps) => {
  const [cars, setCars] = useLocalStorageState<Car[]>('cars');
  const [isLoading, setIsLoading] = useState(!cars);

  useEffect(() => {
    setIsLoading(false);
  }, [cars]);

  return <CarsContext.Provider value={{ cars, setCars, isLoading }}>{children}</CarsContext.Provider>;
};

export default CarsProvider;
