// import { NavigateFunction } from 'react-router-dom';

export interface Tea {
    _id:string,
    name:string,
    slug:string,
    altnames:string,
    image:string,
    origin:string,
    type:string,
    caffeine:string,
    caffenieLevel:string,
    decription:string,
    sources:[string],
    colorDescription:string,
    tasteDescription:string,
}

// interface ErrorInterface {
//     isRedirected: boolean,
//     navigate: NavigateFunction,
// }