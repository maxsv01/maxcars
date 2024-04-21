import Typography from '@/components/shared/Typography';
import { IconButton, Tooltip } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface ImageUploaderProps {
  onFileUpload: (file: File | null) => void;
  isFormSubmitted: boolean;
}

const ImageUploader = ({ onFileUpload, isFormSubmitted }: ImageUploaderProps) => {
  const { t } = useTranslation('common');

  const [imageUrl, setImageUrl] = useState<string>('');

  const { acceptedFiles, fileRejections, getRootProps, getInputProps, inputRef } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/webp': [],
    },
    maxFiles: 1,
    maxSize: 2097152, // 2mb
  });

  useEffect(() => {
    if (isFormSubmitted) {
      setImageUrl('');
      // The library does not have a method for deleting files, more - https://github.com/react-dropzone/react-dropzone/issues/805#issuecomment-1025083423
      acceptedFiles.length = 0;
      acceptedFiles.splice(0, acceptedFiles.length);
      fileRejections.length = 0;
      fileRejections.splice(0, fileRejections.length);
      if (inputRef.current) inputRef.current.value = '';
    }
  }, [isFormSubmitted]);

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImageUrl(URL.createObjectURL(file));
      onFileUpload(file);
    }
  }, [acceptedFiles, onFileUpload]);

  const handleRemoveFile = useCallback(() => {
    setImageUrl('');
    onFileUpload(null);
  }, [onFileUpload]);

  return (
    <div>
      {!imageUrl ? (
        <div className="flex flex-col gap-y-4">
          <div
            {...getRootProps({ className: 'dropzone' })}
            className="p-6 flex justify-center items-center flex-col gap-y-3 cursor-pointer"
          >
            <CloudUploadIcon color="primary" fontSize="large" />
            <input {...getInputProps()} />
            <Typography>{t('selectFile')}</Typography>
          </div>
          <Typography>{t('fileSizeLimit')}</Typography>
          <Typography>{t('fileExtensionsLimit')}</Typography>
          {fileRejections.length > 0 && <Typography className="text-red-700">{t('errorWhileUploadFile')}</Typography>}
        </div>
      ) : (
        <div className="flex flex-col gap-y-4">
          <Typography type="l">{t('carImage')}</Typography>
          <div className="relative">
            <div className="absolute right-0 top-0 bg-white/35 rounded-full">
              <Tooltip title={t('deleteImage')}>
                <IconButton onClick={handleRemoveFile} color="warning" size="large">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="max-h-[400px]">
              <Image src={imageUrl} alt={t('embeddedImage')} width={400} height={400} className="object-cover" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
