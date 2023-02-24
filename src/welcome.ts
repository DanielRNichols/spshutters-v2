import {autoinject} from 'aurelia-framework';
import {CompanyDefaults} from './static/companyDefaults';
import {NotificationServices} from './services/notificationServices';
import { ISlatData, SlatDataServices } from 'services/slatDataServices';
import {ApiError} from './services/httpServices';
import {JobDataServices, IJobQueryParameters} from './services/jobDataServices';
import {ListItemsDataService} from './services/listItemsDataServices';
import { Job } from 'models/job';
import {ListItem} from 'models/listItem';

import { DialogService } from 'aurelia-dialog';
import { YesnoDialog } from './resources/elements/dialogs/yesno-dialog';
import { DropDownInputOption } from 'resources/elements/inputs/dropdown-input';

@autoinject()
export class Welcome {
  public heading = "Southern Plantation Shutters Calculator App!";
  public openingTypes = CompanyDefaults.OpeningTypes;
  public selectedOpeningType = this.openingTypes[0];
  public openingOptions: DropDownInputOption[] = this.openingTypes.map(x => {return {value: x.value, label: x.label}});
  public slatOptions: ISlatData[];
  public jobs: Job[];
  public woodTypes: ListItem[];
  public woodTypesOptions: string[];
  public selectedWoodType: string;
  public jobNames: ListItem[];

  public textInputValue: string;
  public numberInputValue: number;
  public lengthInputValue: number;
  public dateInputValue: string;

  constructor(
    private notificationServices: NotificationServices,
    private slatDataServices: SlatDataServices,
    private jobDataServices: JobDataServices,
    private listItemsDataService: ListItemsDataService,
    private dialogService: DialogService
  ) {}

  async activate() {

    this.textInputValue = "Default Value";
    this.numberInputValue = 10.0;
    this.lengthInputValue = 5.5;
    this.dateInputValue ="2020-02-20";

    this.slatOptions = this.slatDataServices.getSlatSpacingOptions(this.selectedOpeningType.value);
    const params: IJobQueryParameters = {
      includeResults: false,
      showCompletedJobs: true,
      //filter: `jobNumber like '%DN%'`,
      orderby: "id desc",
    };

    const jobsResult = await this.jobDataServices.getJobs(params);
    if (jobsResult instanceof ApiError) {
      this.notificationServices.error("", jobsResult.message);
    } else {
      this.jobs = jobsResult;
      console.log(this.jobs);
    }

    const woodTypesResult = await this.listItemsDataService.getWoodTypes();
    if (woodTypesResult instanceof ApiError) {
      this.notificationServices.error("", woodTypesResult.message);
    } else {
      this.woodTypes = woodTypesResult;
      this.selectedWoodType = this.selectedWoodType ? this.selectedWoodType : this.woodTypes[0].value;
      this.woodTypesOptions = this.woodTypes.map(x => x.value);
      console.log(this.woodTypes);
    }

    const jobNamesResult = await this.listItemsDataService.getJobNames();
    if (jobNamesResult instanceof ApiError) {
      this.notificationServices.error("", jobNamesResult.message);
    } else {
      this.jobNames = jobNamesResult;
      console.log(this.jobNames);
    }
  }

  textInputValueChanged() {
    console.log("textInputValueChanged", this.textInputValue);
  }

  numberInputValueChanged() {
    console.log("numberInputValueChanged", this.numberInputValue);
  }

  lengthInputValueChanged() {
    console.log("lengthInputValueChanged", this.lengthInputValue);
  }

  dateInputValueChanged() {
    //this.dateInputValue.setDate(new Date(this.dateInputValue));
    console.log("dateInputValueChagned", this.dateInputValue);
  }

  woodTypeChanged(newValue: string) {
    console.log("woodTypeChanged:", newValue);
    this.selectedWoodType = newValue;
  }
  openingChanged(newValue: any) {
    console.log("openingChanged:", newValue);
    this.selectedOpeningType = this.openingTypes.find(x => x.value === newValue);
    this.slatOptions = this.slatDataServices.getSlatSpacingOptions(this.selectedOpeningType.value);

  }

  testYesNoDialog() {
    let prompt = "Any good ?";
    this.dialogService
      .open({ viewModel: YesnoDialog, model: prompt, lock: false })
      .whenClosed((response) => {
        if (!response.wasCancelled) {
          console.log("GOOD");
        } else {
          console.log("NOT GOOD");
        }
      });
  }

  testToastr() {
    this.notificationServices.info("Hello", "Welcome to SPS Calculator");
  }

  
}
