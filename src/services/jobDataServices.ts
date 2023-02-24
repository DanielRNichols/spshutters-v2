import {autoinject} from 'aurelia-framework';
import { Job } from 'models/job';
import { ApiError, HttpServices } from './httpServices';


export interface IJobQueryParameters  {
  orderby?: string;
  pageSize?: number;
  skip?: number;
  filter?: string;
  showCompletedJobs?: boolean;
  isTrash?: boolean;
  isArchives?: boolean;
  includeResults?: boolean;
}

const mapJobFromDb = (job: any): Job => {
  const mappedJob:Job = {...job};
  mappedJob.paint = !!job.paint;
  mappedJob.allowOverrides = !!job.allowOverrides;
  return mappedJob;
}

const mapJobToDb = (job: Job): any => {
  const mappedJob:any = {...job};
  mappedJob.paint = job.paint ? 1 : 0;
  mappedJob.allowOverrides = job.allowOverrides ? 1 : 0;
  return mappedJob;
}


@autoinject()
export class JobDataServices {

  private _resourceName = 'jobs';
  constructor(private _httpServices: HttpServices) {

  }

  async getJobs(params: IJobQueryParameters): Promise<Job[] | ApiError> {
    const queryStr = this.getJobQueryString(params);
    const url = `${this._resourceName}${queryStr}`; 
    console.log(url);
    const result = await this._httpServices.get(url);
    if(result instanceof ApiError) return result;
    //const startTime = new Date();
    const mappedData: Job[] = result.data.map((value: any) => mapJobFromDb(value));
    //const endTime = new Date();
    //console.log("Elapsed time for mapping:", (endTime.getMilliseconds() - startTime.getMilliseconds())/1000.0);

    return mappedData;

  }

  getJobQueryString(params: IJobQueryParameters): string {
    let orderbyParam = params.orderby ? "orderby="+params.orderby : '';
    let pageSizeParam = params.pageSize ? "top="+params.pageSize : '';
    let skipParam = params.skip ? "skip=" + params.skip : '';
 
    let filterParam = "filter=MarkedForDeletion=" + (params.isTrash ? '1' : '0');
    if (params.isArchives) {
        filterParam += " and status='Completed'";
    } else if (!params.isTrash && !params.showCompletedJobs) {
        filterParam += " and status<>'Completed'";
    }
    filterParam += params.filter ? " and " + params.filter : '';
 
    let paramStr = orderbyParam ? '?' + orderbyParam : '';
    paramStr += pageSizeParam ? (paramStr ? '&' : '?') + pageSizeParam : '';
    paramStr += skipParam ? (paramStr ? '&' : '?') + skipParam : '';
    paramStr += filterParam ? (paramStr ? '&' : '?') + filterParam : '';
    paramStr += params.includeResults ? (paramStr ? '&' : '?') + 'includeResults=true' : '';
    paramStr += params.filter ? '&wildcards=true' : '';
 
    return paramStr;
 }



}
