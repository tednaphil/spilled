import { TeaHardcoded, allHardcodedTeas } from '../../utils/interface';
import TeaArticle from '../teaArticle/TeaArticle';

// interface Props {
//     name: string,
//     tea: TeaHardcoded,
//     slug: string,
//     key: number,
// }

function TeaEd() {
    const teaArticle = allHardcodedTeas.map((tea: TeaHardcoded) => {
        return (
          <TeaArticle 
            name={tea.type}
            slug={tea.type}
            tea={tea}
            key={Date.now()}
          />
        )
      })
    return (
        <>
            {teaArticle}
        </>
    )
}

export default TeaEd