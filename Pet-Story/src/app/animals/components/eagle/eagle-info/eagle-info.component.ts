import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoService } from 'src/app/animals/services/info.service';

@Component({
  selector: 'app-eagle-info',
  templateUrl: './eagle-info.component.html',
  styleUrls: ['./eagle-info.component.scss']
})
export class EagleInfoComponent implements OnInit, OnDestroy {
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
