import fetch from 'cross-fetch';
import { Request, Response } from "express";
const baseUrl = process.env['URL_BASE'];
const baseUrlSearch = process.env['URL_BASE_SEARCH'];
const token = process.env['TOKEN'];



export const getMovies = async (req: Request,res: Response) => {
    let url = `${baseUrl}now_playing?api_key=${token}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    
    return res.json(data);
};


export const getTopRated = async (req: Request,res: Response) => {
    let url = `${baseUrl}top_rated?api_key=${token}&language=en-US&page=1`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    
    return res.json(data);
};

export const getPopular = async (req: Request,res: Response) => {
    let url = `${baseUrl}popular?api_key=${token}&language=en-US&page=1`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return res.json(data);
};

export const getDetail = async (req: Request,res: Response) => {
    let url = `${baseUrl}${req.params.id}?api_key=${token}&language=en-US`;
   
    const response = await fetch(url);
    const data = await response.json();
    
    return res.json(data);
};


export const getSearch = async (req: Request,res: Response) => {
    let url = `${baseUrlSearch}3/search/movie?api_key=${token}&language=en-US&page=1&include_adult=false&query=${req.params.search}`;
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    
    return res.json(data);
};