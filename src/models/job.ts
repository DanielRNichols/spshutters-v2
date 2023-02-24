export interface Job {
  id: number;
  jobNumber: string;
  jobName: string;
  paint: boolean;
  woodType: string;
  thickness: number;
  createdOn: string;
  completedOn: string;
  status: string;
  allowOverrides: boolean;
  notes: string;
  //openings?: IOpening[];

}

// export class Job {

//     constructor(id, number, name, paint, woodType, thickness,
//                 createdOn, completedOn = '',
//                 status = '', allowOverrides = false, notes = '', openings = null) {
//         this._id = id;
//         this._number = number;
//         this._name = name;
//         this._paint =!!paint;
//         this._woodType = woodType;
//         this._thickness = thickness;
//         this._createdOn = createdOn;
//         this._completedOn = completedOn;
//         this._status = status;
//         this._allowOverrides = !!allowOverrides;
//         this._notes = notes;
//         this._openings = openings ? openings : [];
//     }

//     //Clone() {
//     //    let job = new Job(null, this.Number, this.Name, this.CreatedOn, this.CompletedOn, this.status, this.allowOverrides, this.notes);
//     //    for (let i = 0; i < this._openingParameters.length; i++) {
//     //        job.Openings[i] = this.Openings[i].Clone();
//     //    }

//     //    return job;
//     //}

//     get Id() {
//         return this._id;
//     }
//     set Id(id) {
//         this._id = id;
//     }

//     get Number() {
//         return this._number;
//     }
//     set Number(number) {
//         this._number = number;
//     }

//     get Name() {
//         return this._name;
//     }
//     set Name(name) {
//         this._name = name;
//     }

//     get Paint() {
//         return this._paint;
//     }
//     set Paint(paint) {
//         this._paint = paint;
//     }

//     get WoodType() {
//         return this._woodType;
//     }
//     set WoodType(woodType) {
//         this._woodType = woodType;
//     }

//     get Thickness() {
//         return this._thickness;
//     }
//     set Thickness(thickness) {
//         this._thickness = thickness;
//     }

//     get Status() {
//         return this._status;
//     }
//     set Status(status) {
//         this._status = status;
//     }

//     get CreatedOn() {
//         return this._createdOn;
//     }
//     set CreatedOn(createdOn) {
//         this._createdOn = createdOn;
//     }

//     get CompletedOn() {
//         return this._completedOn;
//     }
//     set CompletedOn(completedOn) {
//         this._completedOn = completedOn;
//     }

//     get AllowOverrides() {
//         return this._allowOverrides;
//     }
//     set AllowOverrides(allowOverrides) {
//         this._allowOverrides = allowOverrides;
//     }

//     get Notes() {
//         return this._notes;
//     }
//     set Notes(notes) {
//         this._notes = notes;
//     }

//     get Openings() {
//         return this._openings;
//     }
//     set Openings(openings) {
//         this._openings = openings;
//     }

// }
