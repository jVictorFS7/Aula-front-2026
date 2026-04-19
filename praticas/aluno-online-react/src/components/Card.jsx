import "./Card.css";
function Card({cards}){
    return (
    
    <section>
        {cards.map((card, index) => (
        <article key={index}>
          <h3>{card.titulo}</h3>

          <ul>
            {card.itens.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

        </article>
      ))}
    </section>    
    )    
}

export default Card;