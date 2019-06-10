@Component({
  selector: 'tooltip',
  template: `
    <h1>{{config.position}}</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  @Input() config;
  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <tooltip [config]="config"></tooltip>
    <button (click)="onClick()">Click</button>
  `
})
export class AppComponent {
  config = {
    position: 'top'
  };

  onClick() {
    this.config.position = 'bottom';
  }
}

// После клика на кнопку, мы не увидим никаких логов в консоли. Angular просто сравнил старое и новое значения по ссылке, которая осталась прежней.