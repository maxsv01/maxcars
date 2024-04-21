import useDatabase from '@/components/core/DatabaseContext/useDatabase';
import { Car } from '@/types/CarTypes';
import { getImage } from 'db';
import { useEffect, useState } from 'react';

interface useGetImageUrlFromDBProps {
  imageId: Car['imageId'];
}

const useGetImageUrlFromDB = ({ imageId }: useGetImageUrlFromDBProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const db = useDatabase();

  useEffect(() => {
    const fetchImage = async () => {
      if (db && imageId) {
        try {
          const result = await getImage(db, imageId);
          if (result?.file) {
            const url = URL.createObjectURL(result.file);
            setImageUrl(url);
          } else {
            console.warn('Image not found.');
          }
        } catch (err) {
          console.warn('Error when uploading an image.');
        }
      } else {
        setImageUrl('');
      }
    };
    fetchImage();
  }, [db, imageId]);

  return { imageUrl };
};

export default useGetImageUrlFromDB;
