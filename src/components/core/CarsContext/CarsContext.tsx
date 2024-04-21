import { Car } from '@/types/CarTypes';
import { Dispatch, SetStateAction, createContext } from 'react';

interface CarsContextProps {
  cars: Car[] | undefined;
  setCars: Dispatch<SetStateAction<Car[] | undefined>>;
  isLoading: boolean;
}

const CarsContext = createContext<CarsContextProps | undefined>(undefined);

export default CarsContext;
