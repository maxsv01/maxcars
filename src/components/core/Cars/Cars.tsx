import CarDetail from '@/components/core/CarDetail';
import useCars from '@/components/core/CarsContext/useCars';
import CarsList from '@/components/core/CarsList';
import Typography from '@/components/shared/Typography';
import { CircularProgress } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { useSearchParams } from 'next/navigation';

const Cars = () => {
  const { t } = useTranslation('common');
  const { cars, isLoading } = useCars();
  const searchParams = useSearchParams();

  if (isLoading) return <CircularProgress />;
  if (!cars || cars.length === 0) return <Typography type="l">{t('carsNotFound')}</Typography>;
  const carSlug = searchParams.get('carSlug')?.toString();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <section>
        <Typography type="h3">{t('carsList')}</Typography>
        <div className="max-w-sm mt-5">
          <CarsList cars={cars} activeSlug={carSlug} />
        </div>
      </section>
      <section>
        <Typography type="h3">{t('carDetail')}</Typography>
        <div className="max-w-sm mt-5">
          <CarDetail activeCarSlug={carSlug || ''} />
        </div>
      </section>
    </div>
  );
};

export default Cars;
