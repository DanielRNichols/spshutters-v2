export class Formatters {
  static ToFraction(value: number, roundToNearest = 32): string {
    let wholePart = Math.floor(value);

    let numerator = Math.round((value - wholePart) * roundToNearest);

    if (numerator == 0) 
      return `${wholePart}"`;

    let denominator = roundToNearest;

    while (numerator % 2 == 0) {
      numerator /= 2;
      denominator /= 2;
    }
    if (wholePart != 0) 
      return `${wholePart}-${numerator}/${denominator}"`;
    else 
      return `${numerator}/${denominator}"`;
  }
}
