import { IDBPDatabase, openDB, DBSchema } from 'idb';

const DATABASE_NAME = 'carDatabase';
const STORE_NAME = 'images';
const VERSION = 1;

interface ImageRecord {
  id: string;
  file: Blob;
}
export interface MyDBSchema extends DBSchema {
  images: {
    value: ImageRecord;
    key: string;
    indexes: {};
  };
}

export const initDB = async () => {
  const db = await openDB<MyDBSchema>(DATABASE_NAME, VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });

  return db;
};

export const saveImage = async (db: IDBPDatabase<MyDBSchema>, file: Blob, id: string): Promise<void> => {
  await db.put(STORE_NAME, { id, file });
};

export const getImage = async (db: IDBPDatabase<MyDBSchema>, id: string): Promise<ImageRecord | undefined> => {
  return await db.get(STORE_NAME, id);
};

export const deleteImage = async (db: IDBPDatabase<MyDBSchema>, id: string): Promise<void> => {
  await db.delete(STORE_NAME, id);
};
