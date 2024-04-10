import { TeaHardcoded } from '../../utils/interface';
import { NavLink } from "react-router-dom";
import './TeaArticle.css'

interface Props {
  tea: TeaHardcoded,
  slug: string,
}

function TeaArticle({ tea, slug }: Props) {
  return (
    <div className='container'>
      <h1>{tea.type} tea</h1>
      <section className='tea-section' id='ed-summary'>
        <h2 className='education-h2'>Summary</h2>
        <p>{tea.summary}</p>
      </section>
      <div className='education-wrapper'>
        <section className='tea-section' id='ed-creation'>
          <h2 className='education-h2'>1. Creation</h2>
          <p>{tea.creation}</p>
        </section>
        <section className='tea-section' id='ed-withering'>
          <h2 className='education-h2'>2. Withering</h2>
          <p>{tea.withering}</p>
        </section>
        <section className='tea-section' id='ed-rolling'>
          <h2 className='education-h2'>3. Rolling</h2>
          <p>{tea.rolling}</p>
        </section>
        <section className='tea-section' id='ed-oxidation'>
          <h2 className='education-h2'>4. Oxidation</h2>
          <p>{tea.oxidation}</p>
        </section>
        <section className='tea-section' id='ed-heating'>
          <h2 className='education-h2'>5. Heating</h2>
          <p>{tea.heating}</p>
        </section>
        <section className='tea-section' id='ed-climate'>
          <h2 className='education-h2'>Climate</h2>
          <p>{tea.climate}</p>
        </section>
      </div>
      <div className='link-wrapper'>
        <NavLink to='/' className='home-link'>⃪ Go back</NavLink>
        <NavLink to={`/tea/${slug}`} className='teas-link'>See {slug} tea →</NavLink>
      </div>
    </div>
  )
}

export default TeaArticle