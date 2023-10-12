import { getAxiosInstance } from "src/boot/axios";
import { CityParams, CityDto } from "src/model/service/weatherModels";

const cityAxiosInstance = getAxiosInstance(process.env.citySearchApi!);

export const cityService = {
    defaultParams: {
        key: '8719da4ab566422ab70a73b9b6b1edc9',
    },
    getCities: (params: CityParams) => {
        return cityAxiosInstance.get('/v2/city/lookup', { params })
    }
}