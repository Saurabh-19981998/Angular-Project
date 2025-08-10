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

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, GlobalStyleComponent, Button, Card, HoverCard, Logger, CommonModule, Parent],
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
