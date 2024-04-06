import { TeaHardcoded } from '../../utils/interface';
import { NavLink } from "react-router-dom";

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
           <p>{tea.summary}</p>
           <p>{tea.creation}</p>
           <p>{tea.withering}</p>
           <p>{tea.rolling}</p>
           <p>{tea.oxidation}</p>
           <p>{tea.heating}</p>
           <p>{tea.climate}</p>
           <button className="infoButton">
            <NavLink to={`/tea/${slug}`}>See {slug} tea→</NavLink>
          </button>
        </>
    )
}

export default TeaArticle