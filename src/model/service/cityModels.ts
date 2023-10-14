export interface CityParams {
    key: string;
    location: string;
    adm?: string;
    range?: string;
    number?: number;
    lang?: string;
}
export interface CityDto {
    adm1: string;
    adm2: string;
    country: string;
    fxLink: string;
    id: string;
    isDst: number;
    lat: number;
    lon: number;
    name: string;
    rank: number;
    type: string;
    tz: string;
    utcOffset: string;
}