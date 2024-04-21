import useCars from '@/components/core/CarsContext/useCars';
import useDatabase from '@/components/core/DatabaseContext/useDatabase';
import { Car, CarFormInputs } from '@/types/CarTypes';
import { saveImage } from 'db';
import ROUTES from 'helpers/routes';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import slugify from 'slugify';

const useCarForm = () => {
  const db = useDatabase();
  const { cars, setCars } = useCars();
  const router = useRouter();

  const { handleSubmit, control, reset } = useForm<CarFormInputs>({
    defaultValues: {
      carBrand: '',
      carModel: '',
      carYearOfManufacture: '',
      imageFile: null,
    },
  });

  const handleFileSave = async (file: File | null) => {
    if (!file || !db) return null;
    try {
      const imageId = Date.now().toString();
      await saveImage(db, file, imageId);
      return imageId;
    } catch (err) {
      console.warn('Error when saving an image.');
      return null;
    }
  };

  const onSubmit: SubmitHandler<CarFormInputs> = async ({ carBrand, carModel, carYearOfManufacture, imageFile }) => {
    const newCar: Car = {
      carBrand,
      carModel,
      carYearOfManufacture,
      imageId: await handleFileSave(imageFile),
      slugify: slugify(`${carBrand}-${carModel}-${carYearOfManufacture}-${Date.now().toString()}`, { lower: true }),
    };

    setCars(cars ? [...cars, newCar] : [newCar]);
    router.push(`${ROUTES.root}?carSlug=${newCar.slugify}`);
    reset();
  };

  return { handleSubmit, control, onSubmit };
};

export default useCarForm;
