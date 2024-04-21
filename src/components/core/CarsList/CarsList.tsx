import CarListItem from '@/components/core/CarsList/CarListItem';
import { Car } from '@/types/CarTypes';

interface CarsListProps {
  cars: Car[];
  activeSlug?: string;
}

const CarsList = ({ activeSlug, cars }: CarsListProps) => {
  return (
    <div className="grid grid-cols-1 divide-y divide-black/35">
      {cars.map((i) => (
        <CarListItem car={i} isActive={i.slugify === activeSlug} key={i.slugify} />
      ))}
    </div>
  );
};

export default CarsList;
