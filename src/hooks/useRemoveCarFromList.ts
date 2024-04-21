import useCars from '@/components/core/CarsContext/useCars';
import useDatabase from '@/components/core/DatabaseContext/useDatabase';
import { Car } from '@/types/CarTypes';
import { deleteImage } from 'db';
import ROUTES from 'helpers/routes';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface useRemoveCarFromListProps {
  slugify: Car['slugify'];
  imageId: Car['imageId'];
}

const useRemoveCarFromList = ({ imageId, slugify }: useRemoveCarFromListProps) => {
  const { cars, setCars } = useCars();
  const db = useDatabase();
  const router = useRouter();

  const handleRemoveCar = useCallback(async () => {
    if (cars) {
      setCars(cars.filter((carFromLocalStorage) => carFromLocalStorage.slugify !== slugify));
      router.push(`${ROUTES.root}`);
      if (imageId) {
        if (!db) return;
        try {
          await deleteImage(db, imageId);
        } catch (error) {
          console.warn('Error when deleting an image.');
        }
      }
    }
  }, [cars, db, imageId, router, setCars, slugify]);

  return { handleRemoveCar };
};

export default useRemoveCarFromList;
