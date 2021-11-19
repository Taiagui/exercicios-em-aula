import TituloLivro from "./TituloLivro"
import livrosPreferido from '../data/database'

const ListaDeLivros = () => {
    return (
        <div>
            <TituloLivro>MEUS LIVROS PREFERIDOS</TituloLivro>
             {livrosPreferido.map(livro =>
             <ul key={livro.id}>
                <h1>{livro.nome}</h1> 
                <img src={livro.capa} alt={livro.name} />
               <p><strong>Autora:</strong>{livro.autor}</p>
               <p><strong>Gênero:</strong> {livro.genero}</p>
               <p><strong>Descrição:</strong> {livro.descricao}</p>

             </ul>

                
                )}
        </div>


    )

}

export default ListaDeLivros