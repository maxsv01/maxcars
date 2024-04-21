import useCars from '@/components/core/CarsContext/useCars';
import PrimaryButton from '@/components/shared/PrimaryButton';
import Typography from '@/components/shared/Typography';
import useGetImageUrlFromDB from '@/hooks/useGetImageUrlFromDB';
import useRemoveCarFromList from '@/hooks/useRemoveCarFromList';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useMemo } from 'react';

interface CarDetailProps {
  activeCarSlug: string;
}

const CarDetail = ({ activeCarSlug }: CarDetailProps) => {
  const { cars } = useCars();
  const car = useMemo(() => {
    if (cars && activeCarSlug) {
      return cars.find((carToFind) => carToFind.slugify === activeCarSlug);
    }
  }, [activeCarSlug, cars]);

  const { t } = useTranslation('common');

  const { imageUrl } = useGetImageUrlFromDB({ imageId: car ? car?.imageId : '' });

  const { handleRemoveCar } = useRemoveCarFromList({
    imageId: car ? car.imageId : '',
    slugify: car ? car.slugify : '',
  });

  if (!activeCarSlug) return <Typography type="l">{t('pleaseSelectCar')}</Typography>;
  if (!car) return <Typography type="l">{t('carNotFound')}</Typography>;

  const { carBrand, carModel, carYearOfManufacture } = car;

  const carTitle = `${carBrand} ${carModel} ${carYearOfManufacture}`;

  return (
    car && (
      <article className="flex flex-col gap-y-4">
        {imageUrl && (
          <div className="max-h-[400px]">
            <Image src={imageUrl} alt={carTitle} width={400} height={400} className="object-cover" />
          </div>
        )}
        <Typography type="l">{carTitle}</Typography>
        <div>
          <PrimaryButton color="error" label={t('removeCar')} onClick={handleRemoveCar} />
        </div>
      </article>
    )
  );
};

export default CarDetail;
