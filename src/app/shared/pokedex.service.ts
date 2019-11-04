import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from '../shared/pokemons-mock'

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons: Pokemon[] = POKEMONS;
  selectedPokemon: Pokemon;

  constructor() { }

  setCurrentPokemon(pokemon: Pokemon)
  {
    this.selectedPokemon = pokemon;
    return this.selectedPokemon;
  }

  addPokemon(pokemon: Pokemon)
  {
    this.pokemons.push(pokemon);
  }
}
