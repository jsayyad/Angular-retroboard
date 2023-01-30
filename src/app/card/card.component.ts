import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cardData } from '../model/card.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() Id!: number;
  @Input() carddata!: cardData[];

  @Output() EnterSave = new EventEmitter();

  IncrementLikes(card: { likes: number }) {
    card.likes++;
  }
  onEnterSave(event: any, index: number) {
    let cardObj = {
      cardIndex: index,
      id: this.Id,
      event: event,
    };
    this.EnterSave.emit(cardObj);
  }
}
