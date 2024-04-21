import { MyDBSchema } from 'db';
import { IDBPDatabase } from 'idb';
import { createContext } from 'react';

interface DatabaseContextType {
  db: IDBPDatabase<MyDBSchema> | null;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export default DatabaseContext;
