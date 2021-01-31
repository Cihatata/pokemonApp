import React, { useEffect, useState } from 'react';
import { getPokemonData } from '../../service';
import './ability.css';
const Ability = ({ ability }) => {
  const [abilityFeature, setAbilityFeature] = useState();

  // Get english data
  const detectLanguage = () => {
    let obj = abilityFeature.effect_entries.find((item) => {
        return item.language.name === 'en'
      })
    return obj;
  }

  useEffect(() => {
    getPokemonData(ability.url)
      .then((res) => setAbilityFeature(res));
  }, []);

  return (
    <aside>
      {ability && (
        <div className="pokemon-ability">
          <span className="ability-name">
            {ability.name}
          </span>
          <div className="ability-explain">
            {abilityFeature && detectLanguage().short_effect}
          </div>
        </div>
      )}
    </aside>
  );
}

export default Ability;