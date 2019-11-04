import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../shared/pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {
  pokemonToDisplay: Pokemon;
  constructor() { }

  ngOnInit() {
  }

  onSelectedPokemon(pokemon: Pokemon)
  {
    this.pokemonToDisplay = pokemon;
  }

}
