export * from "./index";
import { AxiosRequestConfig, AxiosResponse } from "axios";
export declare function SetBasicConfig(newAxiosConfig: AxiosRequestConfig): void;
export declare function RunAxios(additionalAxiosConfig?: AxiosRequestConfig): Promise<AxiosResponse>;
export declare function SetToken(token: string): void;
