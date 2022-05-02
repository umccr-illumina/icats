export * from "./index";

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

let BasicAxiosConfig: AxiosRequestConfig = {
  baseURL: "https://ica.illumina.com/ica/rest",
  method: "GET",
  headers: { Accept: "application/vnd.illumina.v3+json" },
};

export function SetBasicConfig(newAxiosConfig: AxiosRequestConfig) {
  BasicAxiosConfig = { ...BasicAxiosConfig, ...newAxiosConfig };
}

export async function RunAxios(
  additionalAxiosConfig?: AxiosRequestConfig
): Promise<AxiosResponse> {
  const axiosConfig = { ...BasicAxiosConfig, ...additionalAxiosConfig };
  const axiosResponse = await axios(axiosConfig);
  return axiosResponse;
}

export function SetToken(token: string): void {
  if (BasicAxiosConfig.headers) {
    BasicAxiosConfig.headers.Authorization = `Bearer ${token}`;
  } else {
    BasicAxiosConfig.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
}
