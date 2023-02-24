import { Point } from "models/point";

export class DxfServices {
  header(): string[] {
    return [
      "0",
      "SECTION",
      "2",
      "HEADER",
      "9",
      "$INSUNITS",
      "70",
      "1",
      "0",
      "ENDSEC",
      "0",
      "SECTION",
      "2",
      "TABLES",
      "0",
      "TABLE",
      "2",
      "LTYPE",
      "0",
      "LTYPE",
      "72",
      "65",
      "70",
      "64",
      "2",
      "CONTINUOUS",
      "3",
      "______",
      "73",
      "0",
      "40",
      "0",
      "0",
      "ENDTAB",
      "0",
      "TABLE",
      "2",
      "LAYER",
      "0",
      "ENDTAB",
      "0",
      "ENDSEC",
    ];
  }

  startEntities(): string[] {
    return ["0", "SECTION", "2", "ENTITIES"];
  }

  endEntities(): string[] {
    return ["0", "ENDSEC"];
  }

  eof() {
    return ["0", "EOF"];
  }

  line(layer: string, startPt: Point, endPt: Point): string[] {
    return [
      "0",
      "LINE",
      "8",
      layer,
      "10",
      startPt.x.toString(),
      "20",
      startPt.y.toString(),
      "11",
      endPt.x.toString(),
      "21",
      endPt.y.toString(),
    ];
  }

  circle(layer: string, cenPt: Point, diameter: number): string[] {
    return [
      "0",
      "CIRCLE",
      "8",
      layer,
      "10",
      cenPt.x.toString(),
      "20",
      cenPt.y.toString(),
      "40",
      (diameter * 0.5).toString(),
    ];
  }

  rectangle(layer: string, startPt: Point, endPt: Point): string[] {
    let pt2 = { x: endPt.x, y: startPt.y };
    let pt3 = { x: startPt.x, y: endPt.y };
    let l1 = this.line(layer, startPt, pt2);
    let l2 = this.line(layer, pt2, endPt);
    let l3 = this.line(layer, endPt, pt3);
    let l4 = this.line(layer, pt3, startPt);

    return [...l1, ...l2, ...l3, ...l4];
  }
}
