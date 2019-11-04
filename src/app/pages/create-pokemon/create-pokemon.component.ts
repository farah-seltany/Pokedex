import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from 'src/app/shared/pokemon';
import { PokedexService } from 'src/app/shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {

  pokemon: Pokemon = new Pokemon ('', '', '');
  constructor(public pokedexService: PokedexService) { }

  ngOnInit() {
  }

  addPokemon(pokemon: Pokemon)
  {
    this.pokedexService.addPokemon(pokemon);
  }


}
