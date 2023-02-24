import * as toastr from "toastr";

export enum NotificationPositions {
  TopCenter = "top-center",
  BottomCenter = "bottom-center",
  TopFullWidth = "top-full-width",
  BottomFullWidth = "bottom-full-width",
  TopLeft = "top-left",
  TopRight = "top-right",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
}

export class NotificationServices {
  showNotifications = true;
  constructor() {}

  setShowNotifications(show: boolean) {
    this.showNotifications = show;
  }

  setPosition(pos: NotificationPositions) {
    const className = `toast-${pos}`;
    toastr.options.positionClass = className;
  }

  setDuration(duration: number) {
    toastr.options.showDuration = duration;
  }

  setTimeOut(timeOut: number) {
    toastr.options.timeOut = timeOut;
  }

  warning(title: string, msg: string) {
    if (this.showNotifications) toastr.warning(title, msg);
    console.log("Warning: " + title + (title == "" ? "" : ":") + msg);
  }

  error(title: string, msg: string) {
    if (this.showNotifications) toastr.error(title, msg);
    console.log("Error: " + title + (title == "" ? "" : ":") + msg);
  }

  success(title: string, msg: string) {
    if (this.showNotifications) toastr.success(title, msg);
    console.log("Success: " + title + (title == "" ? "" : ":") + msg);
  }
  info(title: string, msg: string) {
    if (this.showNotifications) toastr.info(title, msg);
    console.log("Info: " + title + (title == "" ? "" : ":") + msg);
  }
}
