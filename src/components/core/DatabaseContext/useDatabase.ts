import { useContext } from 'react';
import DatabaseContext from '@/components/core/DatabaseContext/DatabaseContext';

const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context.db;
};

export default useDatabase;
