import { number } from "echarts"

export interface NewsParams {
    num: number,
    page?: number,
    rand?: number,
    word?: string,
}

export interface NewsDto {
    curpage: number,
    allnum: number,
    id: string,
    ctime: string,
    title: string,
    description: string,
    source: string,
    picUrl: string,
    url: string
}