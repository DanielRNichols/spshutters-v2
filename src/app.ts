import {PLATFORM} from 'aurelia-pal';
import { autoinject } from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {NotificationPositions, NotificationServices} from 'services/notificationServices';
import * as environment from '../config/environment.json'; 

@autoinject()
export class App {
  public router: Router;
  public isBeta: boolean;
  public versionLabel: string;

  constructor(private notificationServices: NotificationServices) {
    this.isBeta = environment.isBeta;
    this.versionLabel = environment.versionLabel;

  }

  activate() {
    this.configureNotifications();
  }

  public configureRouter(config: RouterConfiguration, router: Router): Promise<void> | PromiseLike<void> | void {
    config.title = 'Southern Plantation Shutters';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      }
    ]);

    this.router = router;
  }

  configureNotifications() {
    this.notificationServices.setPosition(NotificationPositions.BottomCenter);
    this.notificationServices.setTimeOut(1500);
}
}
