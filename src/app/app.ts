import { Component, DoBootstrap, Injector, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from '../user-card/user-card';
import { GlobalStyleComponent } from "../global-style/global-style";
import { Button } from '../button/button';
import { Card } from "../card/card";
import { HoverCard } from "../hover-card/hover-card";
import { Logger } from '../logger/logger';
import { CommonModule } from '@angular/common';
import { Parent } from '../parent/parent';
import { FocusInput } from "../focus-input/focus-input";
import { ViewChildChild } from "../view-child-child/view-child-child";
import { ViewChildParent } from '../view-child-parent/view-child-parent';
import { ContentQueryItem } from '../content-query-item/content-query-item';
import { ContentQueryParent } from '../content-query-parent/content-query-parent';
import { QueryOptionsParent } from '../query-options-parent/query-options-parent';
import { QueryOptionsChild } from '../query-options-child/query-options-child';
import { AutofocusInput } from '../autofocus-input/autofocus-input';
import { ViewContainerExample } from '../view-container-example/view-container-example';
import { createCustomElement } from '@angular/elements';
import { MyGreeting } from '../my-greeting/my-greeting';
import { SignalCounter } from '../signal-counter/signal-counter';
import { EffectDemo } from '../effect-demo/effect-demo';
import { LinkedSignalDemo } from "../linked-signal-demo/linked-signal-demo";
import { CustomEqualityDemo } from "../custom-equality-demo/custom-equality-demo";
import { UserProfile } from "../user-profile/user-profile";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { EventDemo } from "../event-demo/event-demo";
import { Login } from "../login/login";
import { Counter } from "../counter/counter";
import { UserStatusComponent } from "../user-status/user-status";

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, GlobalStyleComponent, Button, Card, HoverCard, Logger, CommonModule, Parent, FocusInput, ViewChildChild, ViewChildParent, ContentQueryItem, ContentQueryParent, QueryOptionsParent, QueryOptionsChild, AutofocusInput, ViewContainerExample, SignalCounter, EffectDemo, LinkedSignalDemo, CustomEqualityDemo, UserProfile, ThemeSwitcher, EventDemo, Login, Counter, UserStatusComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements DoBootstrap{
  constructor(private injector: Injector) {}
  
  title = 'my-first-angualr-app';

  initialCount = 18;

  handleButtonClick(message: string)
  {
    console.log('parent component received event:', message);

    this.title = message;
  }

  //logger - lifecycle demo
  messageFromParent = 'Hello World!';
  showLoggerComponent = true;

  changeMessage() {
    this.messageFromParent = 'Updated at ' + new Date().toLocaleTimeString();
  }

  toggleLogger() {
    this.showLoggerComponent = !this.showLoggerComponent;
  }

   ngDoBootstrap() {
    // Create the custom element class from the Angular component.
    const MyGreetingElement = createCustomElement(MyGreeting, { injector: this.injector });

    // Define the custom element with the browser's registry.
    customElements.define('my-greeting-element', MyGreetingElement);
  }


}
