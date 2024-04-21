'use client';

import CarForm from '@/components/core/CarForm';
import Cars from '@/components/core/Cars';
import CarsProvider from '@/components/core/CarsContext/CarsProvider';
import DatabaseProvider from '@/components/core/DatabaseContext/DatabaseProvider';

const HomePage = () => {
  return (
    <div className="px-6">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-y-8">
        <DatabaseProvider>
          <CarsProvider>
            <section>
              <CarForm />
            </section>
            <Cars />
          </CarsProvider>
        </DatabaseProvider>
      </div>
    </div>
  );
};

export default HomePage;
