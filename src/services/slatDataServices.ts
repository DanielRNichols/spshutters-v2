// Singleton class for holding Slat Data, slatData is hard-coded now, should come from database

export interface ISlatData {
  id: number;
  type: string;
  desc: string;
  spacing: number;
  distanceToFirstSlot: number;
  firstSlotMortiseAdjustment: number;
  distanceToLastSlot: number;
  slatWidth: number;
  slatThickness: number;
  tenonLengthAdjustment: number;
  requiresTiltRod: boolean;
}

export class SlatDataServices {
  slatData: ISlatData[];
  
  constructor() {
    this.slatData = [
      {
        id: 1,
        type: "FixedSlat",
        desc: "1-5/8 x 1-7/8",
        spacing: 1.625,
        distanceToFirstSlot: 0.9375,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 0.9375,
        slatWidth: 1.875,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.3125,
        requiresTiltRod: false,
      },
      {
        id: 2,
        type: "FixedSlat",
        desc: "2 x 1-7/8",
        spacing: 2,
        distanceToFirstSlot: 0.9375,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 0.9375,
        slatWidth: 1.875,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.3125,
        requiresTiltRod: false,
      },
      {
        id: 3,
        type: "FixedSlat",
        desc: "3-1/4 x 3",
        spacing: 3.25,
        distanceToFirstSlot: 1.8125,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 1.8125,
        slatWidth: 3,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.3125,
        requiresTiltRod: false,
      },
      {
        id: 4,
        type: "FixedSlat",
        spacing: 3.25,
        desc: "3-1/4 x 3-1/2",
        distanceToFirstSlot: 1.8125,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 1.8125,
        slatWidth: 3.5,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.3125,
        requiresTiltRod: false,
      },
      {
        id: 5,
        type: "RollingSlat",
        desc: "1-5/8 x 1-7/8",
        spacing: 1.625,
        distanceToFirstSlot: 1,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 1,
        slatWidth: 1.875,
        slatThickness: 0.5,
        tenonLengthAdjustment: -0.046875,
        requiresTiltRod: true,
      },
      {
        id: 6,
        type: "RollingSlat",
        desc: "3 x 3",
        spacing: 3,
        distanceToFirstSlot: 1.6875,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 1.6875,
        slatWidth: 3,
        slatThickness: 0.5,
        tenonLengthAdjustment: -0.046875,
        requiresTiltRod: true,
      },
      {
        id: 7,
        type: "RollingSlat",
        desc: "3-1/4 x 3-1/2",
        spacing: 3.25,
        distanceToFirstSlot: 1.8125,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 1.8125,
        slatWidth: 3.5,
        slatThickness: 0.5,
        tenonLengthAdjustment: -0.046875,
        requiresTiltRod: true,
      },
      {
        id: 8,
        type: "Bahama",
        desc: "1-5/8 x 1-7/8",
        spacing: 1.625,
        distanceToFirstSlot: 0.9375,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 0.9375,
        slatWidth: 1.875,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.3125,
        requiresTiltRod: false,
      },
      {
        id: 9,
        type: "Bahama",
        desc: "2 x 1-7/8",
        spacing: 2,
        distanceToFirstSlot: 0.9375,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 0.9375,
        slatWidth: 1.875,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.3125,
        requiresTiltRod: false,
      },
      {
        id: 10,
        type: "SimulatedSlat",
        desc: "3-1/4 x 3-1/4",
        spacing: 3.25,
        distanceToFirstSlot: 1.1875,
        firstSlotMortiseAdjustment: 0.0,
        distanceToLastSlot: 0.4375,
        slatWidth: 3.25,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.5,
        requiresTiltRod: false,
      },
      {
        id: 11,
        type: "SimulatedSlat",
        desc: "4 x 4",
        spacing: 4,
        distanceToFirstSlot: 1.4375,
        firstSlotMortiseAdjustment: 0.5,
        distanceToLastSlot: 0.5625,
        slatWidth: 4,
        slatThickness: 0.5,
        tenonLengthAdjustment: 0.5,
        requiresTiltRod: false,
      },
      {
        id: 12,
        type: "RaisedPanel",
        desc: "Raised Panel",
        spacing: 0,
        distanceToFirstSlot: 0,
        firstSlotMortiseAdjustment: 0,
        distanceToLastSlot: 0,
        slatWidth: 0,
        slatThickness: 0,
        tenonLengthAdjustment: 0.5,
        requiresTiltRod: false,
      },
    ];
  }

  getSlatSpacingOptions(type: string): ISlatData[] {
    let slatData = this.slatData;
    if (!slatData) return [];

    return slatData.filter(x => x.type == type);

    // for (let i = 0; i < slatData.length; i++) {
    //   if (slatData[i].type == type) {
    //     options.push({id: slatData[i].id, desc: slatData[i].desc, spacing: slatData[i].spacing});
    //   }
    // }
    // return options;
  }

  getSlatDataId(type: string, spacing: number): number {
    let slatData = this.getSlatData(undefined, type, spacing);
    if (!slatData) 
      return undefined;
    
    return slatData.id;
  }

  getSlatDataById(id: number): ISlatData {
    
    let slatData = this.slatData;
    if (!slatData) return null;

    return slatData.find(r => r.id === id);
 }

  getSlatData(id: number, type: string, spacing: number): ISlatData {
    let slatData = this.slatData;
    if (!slatData) 
      return null;

    if(id)
      return this.getSlatDataById(id);

    // used r.spacing == slatSpacing instead of === because sometimes slatSpacing is a string
    return slatData.find(r => r.type === type && r.spacing == spacing);

  }
}

