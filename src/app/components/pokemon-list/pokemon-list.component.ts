import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Pokemon[];
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  constructor(public pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokemons = this.pokedexService.pokemons;
  }

  onClickedPokemon(pokemon: Pokemon)
  {
    this.pokemonClick.emit(pokemon);
  }

}
