import axios from 'axios';

export const ENDPOINT = `https://api-beta.busybusy.io`;

export const wrapRpcPayload = (
  method: string,
  payload: Record<string, unknown>
) => {
  return {
    jsonrpc: `2.0`,
    id: `1`,
    method,
    params: { ...payload },
  };
};

export const api = axios.create({
  baseURL: ENDPOINT,
  method: `GET`,
  params: {
    _debug: 'true',
    _version: '3.2',
  },
});
