import { Axios } from "axios";

const api = new Axios({ baseURL: process.env.REACT_APP_API_BASE_URL });

export enum STATUS_CODE {
    NO_CONTENT = 204,
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    INTERNAL_SERVER_ERROR = 500,
}

export interface AxiosResponse {
    data: any;
    status: number;
    statusText: string;
    headers: any;
    request?: any;
}

export interface IDataResponse {
    data: any;
    statusCode: number;
    message: string;
}

export const apiGet = async (url: string): Promise<IDataResponse> => {
    const response: AxiosResponse = await api.get(url);

    try {
        if (response === undefined) {
            return {
                data: [],
                message: "Api está indisponível",
                statusCode: 500,
            };
        }

        if (response.status === STATUS_CODE.NO_CONTENT) {
            return {
                data: [],
                message: "Nunhum conteúdo a ser exibido",
                statusCode: response.status,
            };
        }

        return {
            data: JSON.parse(response.data),
            message: "Ok",
            statusCode: response.status,
        };
    } catch (error) {
        return {
            data: null,
            message: "Error",
            statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
        };
    }
}