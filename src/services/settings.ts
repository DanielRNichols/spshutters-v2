import { autoinject } from "aurelia-framework";
import { CompanyDefaults } from "static/companyDefaults";
import { LocalStorageServices } from "services/localStorageServices";

@autoinject()
export class Settings {
  showTooltips;
  printInput;
  printParameters;
  filterOn;
  filterString;
  maxNumberOfRails;
  maxNumberOfDividers;
  showCompletedJobs;
  showIds;
  showOrdinals;
  showGraphics;
  drawBorder;
  graphicsWindowWidth;
  graphicsWindowHeight;
  graphicsWindowFontSize;
  graphicsWindowTextSpacing;
  graphicsOnSeparatePage;
  //rotateGraphics;
  fullWidth;
  textScaleFactor;

  includeNotesInPartsList;
  //includeShutterInPartsList;

  showSectionsListTable;

  //_useCNCByDefault;

  constructor(private localStorage: LocalStorageServices) {}

  get ShowTooltips() {
    if (this.showTooltips === undefined) {
      this.showTooltips = this.localStorage.getBool(
        "spshutters:showTooltips",
        CompanyDefaults.ShowTooltips
      );
    }
    return this.showTooltips;
  }
  set ShowTooltips(value) {
    this.showTooltips = value;
    this.localStorage.setItem("spshutters:showTooltips", this.showTooltips);
  }

  get PrintInput() {
    if (this.printInput === undefined) {
      this.printInput = this.localStorage.getBool(
        "spshutters:printInput",
        CompanyDefaults.PrintInput
      );
    }
    return this.printInput;
  }
  set PrintInput(value) {
    this.printInput = value;
    this.localStorage.setItem("spshutters:printInput", this.printInput);
  }

  get PrintParameters() {
    if (this.printParameters === undefined) {
      this.printParameters = this.localStorage.getBool(
        "spshutters:printParameters",
        CompanyDefaults.PrintParameters
      );
    }
    return this.printParameters;
  }
  set PrintParameters(value) {
    this.printParameters = value;
    this.localStorage.setItem(
      "spshutters:printParameters",
      this.printParameters
    );
  }

  get FilterOn() {
    if (this.filterOn === undefined) {
      this.filterOn = this.localStorage.getItem(
        "spshutters:filterOn",
        CompanyDefaults.FilterOn
      );
    }
    return this.filterOn;
  }
  set FilterOn(value) {
    this.filterOn = value;
    this.localStorage.setItem("spshutters:filterOn", this.filterOn);
  }

  get FilterString() {
    if (this.filterString === undefined) {
      this.filterString = this.localStorage.getItem("spshutters:filter", "");
    }
    return this.filterString;
  }
  set FilterString(value) {
    this.filterString = value;
    this.localStorage.setItem("spshutters:filter", this.filterString);
  }

  get MaxNumberOfRails() {
    if (this.maxNumberOfRails === undefined) {
      this.maxNumberOfRails = this.localStorage.getInt(
        "spshutters:maxNumberOfRails",
        CompanyDefaults.MaxNumberOfRails
      );
    }
    return this.maxNumberOfRails;
  }
  set MaxNumberOfRails(value) {
    this.maxNumberOfRails = value;
    this.localStorage.setItem(
      "spshutters:MaxNumberOfRails",
      this.maxNumberOfRails
    );
  }

  get MaxNumberOfDividers() {
    if (this.maxNumberOfDividers === undefined) {
      this.maxNumberOfDividers = this.localStorage.getInt(
        "spshutters:maxNumberOfDividers",
        CompanyDefaults.MaxNumberOfDividers
      );
    }
    return this.maxNumberOfDividers;
  }
  set MaxNumberOfDividers(value) {
    this.maxNumberOfDividers = value;
    this.localStorage.setItem(
      "spshutters:MaxNumberOfDividers",
      this.maxNumberOfDividers
    );
  }

  get ShowCompletedJobs() {
    if (this.showCompletedJobs === undefined) {
      this.showCompletedJobs = this.localStorage.getBool(
        "spshutters:showCompletedJobs",
        CompanyDefaults.ShowCompletedJobs
      );
    }
    return this.showCompletedJobs;
  }
  set ShowCompletedJobs(value) {
    this.showCompletedJobs = value;
    this.localStorage.setItem(
      "spshutters:showCompletedJobs",
      this.showCompletedJobs
    );
  }

  get ShowIds() {
    if (this.showIds === undefined) {
      this.showIds = this.localStorage.getBool("spshutters:showIds", false);
    }
    return this.showIds;
  }
  set ShowIds(value) {
    this.showIds = value;
    this.localStorage.setItem("spshutters:showIds", this.showIds);
  }

  get ShowOrdinals() {
    if (this.showOrdinals === undefined) {
      this.showOrdinals = this.localStorage.getBool(
        "spshutters:showOrdinals",
        false
      );
    }
    return this.showOrdinals;
  }
  set ShowOrdinals(value) {
    this.showOrdinals = value;
    this.localStorage.setItem("spshutters:showOrdinals", this.showOrdinals);
  }

  get ShowGraphics() {
    if (this.showGraphics === undefined) {
      this.showGraphics = this.localStorage.getBool(
        "spshutters:showGraphics",
        CompanyDefaults.ShowGraphics
      );
    }
    return this.showGraphics;
  }
  set ShowGraphics(value) {
    this.showGraphics = value;
    this.localStorage.setItem("spshutters:showGraphics", this.showGraphics);
  }

  get GraphicsWindowWidth() {
    if (this.graphicsWindowWidth === undefined) {
      this.graphicsWindowWidth = this.localStorage.getReal(
        "spshutters:graphicsWindowWidth",
        CompanyDefaults.GraphicsWindowWidth
      );
    }
    return this.graphicsWindowWidth;
  }
  set GraphicsWindowWidth(value) {
    this.graphicsWindowWidth = value;
    this.localStorage.setItem(
      "spshutters:graphicsWindowWidth",
      this.graphicsWindowWidth
    );
  }

  get GraphicsWindowHeight() {
    if (this.graphicsWindowHeight === undefined) {
      this.graphicsWindowHeight = this.localStorage.getReal(
        "spshutters:graphicsWindowHeight",
        CompanyDefaults.GraphicsWindowHeight
      );
    }
    return this.graphicsWindowHeight;
  }
  set GraphicsWindowHeight(value) {
    this.graphicsWindowHeight = value;
    this.localStorage.setItem(
      "spshutters:graphicsWindowHeight",
      this.graphicsWindowHeight
    );
  }

  get GraphicsWindowFontSize() {
    if (this.graphicsWindowFontSize === undefined) {
      this.graphicsWindowFontSize = this.localStorage.getInt(
        "spshutters:graphicsWindowFontSize",
        CompanyDefaults.GraphicsWindowFontSize
      );
    }
    return this.graphicsWindowFontSize;
  }
  set GraphicsWindowFontSize(value) {
    this.graphicsWindowFontSize = value;
    this.localStorage.setItem(
      "spshutters:graphicsWindowFontSize",
      this.graphicsWindowFontSize
    );
  }

  get GraphicsWindowTextSpacing() {
    if (this.graphicsWindowTextSpacing === undefined) {
      this.graphicsWindowTextSpacing = this.localStorage.getReal(
        "spshutters:graphicsWindowTextSpacing",
        CompanyDefaults.GraphicsWindowTextSpacing
      );
    }
    return this.graphicsWindowTextSpacing;
  }
  set GraphicsWindowTextSpacing(value) {
    this.graphicsWindowTextSpacing = value;
    this.localStorage.setItem(
      "spshutters:graphicsWindowTextSpacing",
      this.graphicsWindowTextSpacing
    );
  }

  get GraphicsOnSeparatePage() {
    if (this.graphicsOnSeparatePage === undefined) {
      this.graphicsOnSeparatePage = this.localStorage.getBool(
        "spshutters:graphicsOnSeparatePage",
        false
      );
    }
    return this.graphicsOnSeparatePage;
  }
  set GraphicsOnSeparatePage(value) {
    this.graphicsOnSeparatePage = value;
    this.localStorage.setItem(
      "spshutters:graphicsOnSeparatePage",
      this.graphicsOnSeparatePage
    );
  }

  get DrawBorder() {
    if (this.drawBorder === undefined) {
      this.drawBorder = this.localStorage.getBool(
        "spshutters:drawBorder",
        false
      );
    }
    return this.drawBorder;
  }
  set DrawBorder(value) {
    this.drawBorder = value;
    this.localStorage.setItem("spshutters:drawBorder", this.drawBorder);
  }

  get IncludeNotesInPartsList() {
    if (this.includeNotesInPartsList === undefined) {
      this.includeNotesInPartsList = this.localStorage.getBool(
        "spshutters:includeNotesInPartsList",
        CompanyDefaults.IncludeNotesInPartsList
      );
    }
    return this.includeNotesInPartsList;
  }
  set IncludeNotesInPartsList(value) {
    this.includeNotesInPartsList = value;
    this.localStorage.setItem(
      "spshutters:includeNotesInPartsList",
      this.includeNotesInPartsList
    );
  }

  get ShowSectionsListTable() {
    if (this.showSectionsListTable === undefined) {
      this.showSectionsListTable = this.localStorage.getBool(
        "spshutters:showSectionsListTable",
        CompanyDefaults.ShowSectionsListTable
      );
    }
    return this.showSectionsListTable;
  }
  set ShowSectionsListTable(value) {
    this.showSectionsListTable = value;
    this.localStorage.setItem(
      "spshutters:showSectionsListTable",
      this.showSectionsListTable
    );
  }

  //get RotateGraphics() {
  //    if (this.rotateGraphics === undefined) {
  //        this.rotateGraphics = this.localStorage.getBool("spshutters:rotateGraphics", false);
  //    }
  //    return this.rotateGraphics;
  //}
  //set RotateGraphics(value) {
  //    this.rotateGraphics = value;
  //    this.localStorage.setItem("spshutters:rotateGraphics", this.rotateGraphics);
  //}

  get FullWidth() {
    if (this.fullWidth === undefined) {
      this.fullWidth = this.localStorage.getBool("spshutters:fullWidth", true);
    }
    return this.fullWidth;
  }
  set FullWidth(value) {
    this.fullWidth = value;
    this.localStorage.setItem("spshutters:fullWidth", this.fullWidth);
  }

  get TextScaleFactor() {
    if (this.textScaleFactor === undefined) {
      this.textScaleFactor = this.localStorage.getReal(
        "spshutters:textScaleFactor",
        CompanyDefaults.TextScaleFactor
      );
    }
    return this.textScaleFactor;
  }
  set TextScaleFactor(value) {
    this.textScaleFactor = value;
    this.localStorage.setItem(
      "spshutters:textScaleFactor",
      this.textScaleFactor
    );
  }

  //   get UseCNCByDefault() {
  //     if (this.useCNCByDefault === undefined) {
  //         this.useCNCByDefault = this.localStorage.getBool("spshutters:useCNCByDefault", CompanyDefaults.CNCBoardAndBattenDefaultOption);
  //     }
  //     return this.useCNCByDefault;
  // }
  // set UseCNCByDefault(value) {
  //     this.useCNCByDefault = value;
  //     this.localStorage.setItem("spshutters:useCNCByDefault", this.useCNCByDefault);
  // }
}
