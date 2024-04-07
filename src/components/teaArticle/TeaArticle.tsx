import { TeaHardcoded } from '../../utils/interface';
import { NavLink } from "react-router-dom";

interface Props {
    tea: TeaHardcoded,
    slug: string,
    key: number,
} 

function TeaArticle({ tea, slug, key}: Props) {
    return (
        <div className='tea-article' id={`${slug}`}>
           <h1>{tea.type}</h1>
           <p>{tea.summary}</p>
           <p>{tea.creation}</p>
           <p>{tea.withering}</p>
           <p>{tea.rolling}</p>
           <p>{tea.oxidation}</p>
           <p>{tea.heating}</p>
           <p>{tea.climate}</p>
          <button className="infoButton">
            <NavLink to='/'>⃪ Go back</NavLink>
          </button>
           <button className="infoButton">
            <NavLink to={`/tea/${slug}`}>See {slug} tea →</NavLink>
          </button>
        </div>
    )
}

export default TeaArticle