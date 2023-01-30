import { card, cardData } from './model/card.model';
import { Component, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  retroData!: card[];

  constructor() {}

  ngOnInit() {
    this.initilizeData();
  }

  initilizeData() {
    this.retroData = [
      { name: 'What went well', id: 1, data: [] },
      { name: 'What Can be Improved', id: 2, data: [] },
      { name: 'Start Doing', id: 3, data: [] },
      { name: 'Action Item', id: 4, data: [] },
    ];
  }

  addCard(selectedId: number) {
    const card: cardData = {
      description: '',
      likes: 0,
    };
    if (this.retroData.length) {
      const matchedCategory = this.retroData.find(
        (category) => category.id === selectedId
      );
      matchedCategory?.data.push(card);
    }
  }

  saveCardDescription(el: any) {
    if (el.id && el.event.target.innerText) {
      this.retroData.forEach((note, index) => {
        if (note.id == el.id) {
          console.log(this.retroData[index].data[el.cardIndex].description);
          this.retroData[index].data[el.cardIndex].description =
            el.event.target.innerText;
        }
      });
    }
    console.log(this.retroData);
  }
}
