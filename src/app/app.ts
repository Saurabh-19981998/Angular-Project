import { Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, GlobalStyleComponent, Button, Card, HoverCard, Logger, CommonModule, Parent, FocusInput, ViewChildChild, ViewChildParent, ContentQueryItem,ContentQueryParent, QueryOptionsParent, QueryOptionsChild, AutofocusInput,ViewContainerExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'my-first-angualr-app';

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




}
