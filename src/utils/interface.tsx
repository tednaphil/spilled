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
    tasteDescription:string
}

// interface ErrorInterface {
//     isRedirected: boolean,
//     navigate: NavigateFunction,
// }
type TeaHardcoded = {
    summary: string,
    origin: string,
    creation: string,
    withering?: string,
    rolling?: string,
    oxidation: string,
    heating: string,
    climate: string
}

export const blackTea: TeaHardcoded = {
    summary: 'Black tea is a type of tea that is known for its robust flavor, dark color, and strong aroma.',
    origin: 'Black tea originates primarily from China, India, Sri Lanka, and Kenya.',
    creation: 'What sets black tea apart is its unique and extreme oxidation process, compared to other teas.',
    withering: 'The process of withering is significantly longer for black teas than any other. The extent of withering can vary depending on factors such as the desired characteristics of the final tea, the specific variety of tea being produced, and regional processing traditions.',
    rolling: 'After withering, the leaves are bruised or rolled to break their cell walls. This allows for the release of enzymes and initiates the oxidation process. The degree of rolling can vary, affecting the final flavor and aroma of the oolong tea.',
    oxidation: 'Oxidation is a crucial step in black tea production. During oxidation, enzymes in the tea leaves interact with oxygen in the air, resulting in chemical changes that give black tea its characteristic flavor, color, and aroma.',
    heating: 'Once the desired level of oxidation is achieved, the leaves are subjected to heat to halt the oxidation process. This step is crucial in black tea production as it preserves the flavor and color of the tea leaves.',
    climate: 'The climate plays a significant role in black tea production. Tea plants thrive in regions with moderate temperatures, high humidity, and consistent rainfall. Altitude also influences the flavor profile of black tea, with higher altitude teas often possessing more complex flavors.'
}

export const oolongTea: TeaHardcoded = {
    summary: '',
    origin: '',
    creation: '',
    withering: '',
    rolling: '',
    oxidation: '',
    heating: '',
    climate: ''
}