import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { Island } from '../../data/islands';

@Component({
  selector: 'app-island-card',
  standalone: true,
  imports: [],
  templateUrl: './island-card.component.html',
  styleUrl: './island-card.component.css',
})
export class IslandCardComponent {
  @Input() island!: Island;
  @Output() currentIsland = new EventEmitter<Island>();

  onIslandSelect() {
    this.currentIsland.emit(this.island);
  }
}
