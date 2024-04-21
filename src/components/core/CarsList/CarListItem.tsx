import Typography from '@/components/shared/Typography';
import { Car } from '@/types/CarTypes';
import { IconButton, Tooltip } from '@mui/material';
import ROUTES from 'helpers/routes';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import DeleteIcon from '@mui/icons-material/Delete';
import useTranslation from 'next-translate/useTranslation';
import useRemoveCarFromList from '@/hooks/useRemoveCarFromList';

interface CarListItemProps {
  isActive: boolean;
  car: Car;
}

const CarListItem = ({ car, isActive }: CarListItemProps) => {
  const { carBrand, carModel, carYearOfManufacture, slugify, imageId } = car;
  const { t } = useTranslation('common');

  const { handleRemoveCar } = useRemoveCarFromList({ imageId, slugify });

  return (
    <article className="flex justify-between items-center">
      <Link href={`${ROUTES.root}?carSlug=${slugify}`} className="py-2 w-full">
        <Typography
          type="l"
          className={twMerge('font-medium', isActive && 'text-primary')}
        >{`${carBrand} ${carModel} ${carYearOfManufacture}`}</Typography>
      </Link>
      <Tooltip title={t('removeCar')}>
        <IconButton onClick={handleRemoveCar} color="warning" size="large">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </article>
  );
};

export default CarListItem;
