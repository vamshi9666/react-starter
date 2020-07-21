/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';
import { LIGHT_ORANGE } from '../styles/colors';

export const uploadToCloudinary = async (path: any) => {
  try {
    const formData = new FormData();
    formData.append('file', path);
    formData.append('upload_preset', 'nwjuv5ki'); // Replace the preset name with your own
    formData.append('api_key', '716942254836752'); // Replace API key with your own Cloudinary key
    formData.append('timestamp', String(Date.now() / 1000));
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    const resp = await axios.post(
      'https://api.cloudinary.com/v1_1/dwo8ep45k/image/upload',
      formData,
      {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      },
    );

    return resp.data.secure_url;
  } catch (err) {
    console.log(err.response);
    throw new Error(err);
  }
};

export function createLazyRoute<T extends RouteComponentProps<any>>(
  RouteComponent: React.ComponentType<T>,
) {
  // eslint-disable-next-line react/display-name
  return function (props: T) {
    return (
      <React.Suspense fallback={<FadeLoader color={LIGHT_ORANGE} />}>
        <RouteComponent {...props} />
      </React.Suspense>
    );
  };
}
export function arrayMin(arr: Array<any>) {
  return arr.reduce((p, v) => (p < v ? p : v));
}

export function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export const getLoggedUserId = () => localStorage.getItem('USER_ID');
