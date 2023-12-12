import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [frontSprite, setSprite]=useState(true);

  function handleClick(){
  if (frontSprite) {
    setSprite(false)
   } else {
    setSprite(true)
   }
  }
  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image" >
          { frontSprite ? <img alt="oh no"src ={pokemon.sprites.front} /> :<img alt="oh no" src ={pokemon.sprites.back}/>}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
