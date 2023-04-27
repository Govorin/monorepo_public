import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  ColorScheme,
  HapticFeedbackImpactStyle,
  HapticFeedbackNotificationType,
  MainButton,
  ScanQrPopupCallback,
  ScanQrPopupParams,
  ShowPopupParams,
  ThemeParams,
  WebApp,
} from './index';

@Injectable({
  providedIn: 'root',
})
export class TelegramWebApplicationService {
  webApp!: WebApp;
  private colorScheme!: BehaviorSubject<ColorScheme>;
  private themeParams!: BehaviorSubject<ThemeParams>;
  readonly mainButton: MainButton;
  constructor(@Inject('WINDOW') private window: Window) {
    if (!this.window?.Telegram?.WebApp) throw new Error('Telegram not found');
    this.webApp = window.Telegram.WebApp;
    this.colorScheme = new BehaviorSubject<ColorScheme>(this.webApp.colorScheme as ColorScheme);
    this.themeParams = new BehaviorSubject<ThemeParams>(this.webApp.themeParams);
    this.mainButton = this.webApp.MainButton;
    this.webApp.onEvent('themeChanged', () => {
      this.colorScheme.next(this.webApp.colorScheme as ColorScheme);
      this.themeParams.next(this.webApp.themeParams);
    });
  }

  get colorScheme$(): Observable<ColorScheme> {
    return this.colorScheme.asObservable();
  }

  get themeParams$(): Observable<ThemeParams> {
    return this.themeParams.asObservable();
  }

  showPopup(params: ShowPopupParams): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.webApp.showPopup(params, (buttonIndex: string) => resolve(buttonIndex));
      } catch (error) {
        reject(error);
      }
    });
  }

  showScanQrPopup(params: ScanQrPopupParams, callback?: ScanQrPopupCallback): void {
    this.webApp.showScanQrPopup(params, callback);
  }

  closePopup(): void {
    this.webApp.closeScanQrPopup();
  }

  impactOccurred(style: HapticFeedbackImpactStyle): void {
    this.webApp.HapticFeedback.impactOccurred(style);
  }

  notificationOccurred(type: HapticFeedbackNotificationType): void {
    this.webApp.HapticFeedback.notificationOccurred(type);
  }

  selectionChanged(): void {
    this.webApp.HapticFeedback.selectionChanged();
  }
}
