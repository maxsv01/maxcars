import React, { useState, useEffect } from 'react';
import { IDBPDatabase } from 'idb';
import { MyDBSchema, initDB } from 'db';
import DatabaseContext from '@/components/core/DatabaseContext/DatabaseContext';

interface DatabaseProviderProps {
  children: React.ReactNode;
}

const DatabaseProvider = ({ children }: DatabaseProviderProps) => {
  const [db, setDb] = useState<IDBPDatabase<MyDBSchema> | null>(null);

  useEffect(() => {
    const setupDB = async () => {
      try {
        const init = await initDB();
        setDb(init);
      } catch (err) {
        console.error('Error when connecting to the database.', err);
      }
    };
    setupDB();
  }, []);

  return <DatabaseContext.Provider value={{ db }}>{children}</DatabaseContext.Provider>;
};

export default DatabaseProvider;
