/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { makeHeader } from 'libs/healthUtils';

export const postFetcherHeaderWithParam = async <T>(url: string, token: string, params: T): Promise<any> => {
  const response = await axios.post(url, params, makeHeader(token));
  return response.data || [];
};

export default postFetcherHeaderWithParam;
