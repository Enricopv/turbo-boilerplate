import { AxiosRequestConfig, AxiosResponse } from 'axios';

declare function get(info: {
    url: string;
    config?: AxiosRequestConfig<any>;
}): Promise<AxiosResponse<any, any>>;
declare const requester: {
    get: typeof get;
};

export { requester };
