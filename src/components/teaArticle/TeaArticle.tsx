import { TeaHardcoded } from '../../utils/interface';

interface Props {
    name: string,
    tea: TeaHardcoded,
    slug: string,
    key: number,
} 

function TeaArticle({name, tea, slug, key}: Props) {
    return (
        <>
           <h1>{tea.type}</h1>
        </>
    )
}

export default TeaArticle