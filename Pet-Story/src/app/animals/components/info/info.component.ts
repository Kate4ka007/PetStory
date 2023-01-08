import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit, OnDestroy {
  content = 'Feed a friend now';
  isInfoClosed = false;
  subscription!: Subscription;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
    this.subscription = this.infoService.isInfoClosed$.subscribe((data) => this.isInfoClosed = data);
  }

  onClick() {
    this.isInfoClosed = !this.isInfoClosed;
    this.infoService.updateIsInfoClosed(this.isInfoClosed);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
