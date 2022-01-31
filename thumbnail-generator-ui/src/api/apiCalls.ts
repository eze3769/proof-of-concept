import { CropData } from '../components/CropArea/CropArea';

const baseURL: string = `${process.env.REACT_APP_BASE_URL}converter` as string;
type size = {
  width: number;
  height: number;
};

export default async function request<T>(
  file: string,
  cropData: CropData,
  size: size
): Promise<T> {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.REACT_APP_API_KEY as string,
    },
    body: JSON.stringify({ image: file, cropData, size }),
  });
  const body = await response.json();
  return body;
}
