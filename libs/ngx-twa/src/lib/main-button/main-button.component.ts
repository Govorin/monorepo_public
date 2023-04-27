import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnDestroy, Output } from '@angular/core';
import { TelegramWebApplicationService } from '@monorepo/ngx-twa';

@Component({
  selector: 'twa-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.less'],
})
export class MainButtonComponent implements OnDestroy {
  @Input() text = 'CONTINUE';
  @Input() color!: string;
  @Input() textColor!: string;
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter<void>();
  mainButton = inject(TelegramWebApplicationService).mainButton;
  clickEmitFn = () => this.click.emit();
  constructor() {
    this.mainButton.onClick(() => this.clickEmitFn());
    this.mainButton.show();
  }

  @Input() set disabled(value: boolean) {
    if (this.mainButton.isActive && value) this.mainButton.disable();
    else if (!this.mainButton.isActive && !value) this.mainButton.enable();
  }

  @Input() set progress(value: boolean) {
    if (!this.mainButton.isProgressVisible && value) this.mainButton.showProgress(false);
    else if (this.mainButton.isProgressVisible && !value) this.mainButton.hideProgress();
  }

  ngOnDestroy() {
    this.mainButton.offClick(this.clickEmitFn);
    this.mainButton.hide();
  }
}
