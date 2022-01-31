import React from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useDispatch } from 'react-redux';
import { saveImage } from '../../features/imageSelected/imageSelectedSlice';

const fileTypes = ['JPG', 'PNG', 'JPEG'];

function FileUploaderContainer() {
  const dispatch = useDispatch();

  const handleChange = (image: File) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = () => {
      dispatch(saveImage({ value: reader.result as string }));
    };
  };

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default FileUploaderContainer;
