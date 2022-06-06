import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { CharacterInterface } from './../characterInterface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Array<CharacterInterface>;

  constructor(private characterService: CharactersService) {
    this.characters = new Array();
   }

  ngOnInit(): void {
    this.characterService.getDetails().subscribe(
      ((character: any) => {
        this.characters = character;
        console.log(this.characters);
      }
    ));
  }

}
