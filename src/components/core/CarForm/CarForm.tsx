import PrimaryButton from '@/components/shared/PrimaryButton';
import { Controller } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';
import { Autocomplete, TextField } from '@mui/material';
import generateYearRange from 'helpers/generateYearRange';
import ImageUploader from '@/components/core/ImageUploader';
import useCarForm from '@/components/core/CarForm/useCarForm';

const carYearOfManufacture = generateYearRange();

const CarForm = () => {
  const { control, handleSubmit, onSubmit } = useCarForm();

  const { t } = useTranslation('common');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4 items-start">
      <div className="flex gap-4 flex-wrap w-full">
        <Controller
          name="carBrand"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={t('carForm.carBrand')} required />
          )}
        />
        <Controller
          name="carModel"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label={t('carForm.carModel')} required />
          )}
        />
        <Controller
          name="carYearOfManufacture"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              onChange={(event, newValue) => onChange(newValue || '')}
              value={value}
              disablePortal
              options={carYearOfManufacture}
              isOptionEqualToValue={(option, value) => option === value || value === ''}
              className="w-full max-w-[210px]"
              openText={t('autoComplete.open')}
              clearText={t('autoComplete.clear')}
              closeText={t('autoComplete.close')}
              loadingText={t('autoComplete.loading')}
              noOptionsText={t('autoComplete.noOptions')}
              renderInput={(params) => <TextField {...params} label={t('carForm.carYearOfManufacture')} required />}
            />
          )}
        />
      </div>
      <Controller
        name="imageFile"
        control={control}
        render={({ field: { onChange, value } }) => <ImageUploader onFileUpload={onChange} value={value} />}
      />

      <PrimaryButton color="primary" label={t('addCar')} type="submit" />
    </form>
  );
};

export default CarForm;
