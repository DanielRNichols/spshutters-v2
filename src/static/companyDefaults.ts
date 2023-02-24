
export class CompanyDefaults {
  public static readonly RoundToNearest = 32;

  public static readonly TopRailExtension = 0.25;
  public static readonly BottomRailExtension = 0.25;

  public static readonly RailTenonLength = 1.0;
  public static readonly DividerTenonLength = 1.0;
  public static readonly StileExtension = 3.0;

  public static readonly BoardLengthExtension = 4;
  public static readonly StileMortisingOffset = 0.5;

  public static readonly TiltRodWidth = 0.75;
  public static readonly TiltRodThickness = 0.75;
  public static readonly TiltRodExtension = 0.375;

  // defaults for input
  public static readonly OpeningType = "FixedSlat";
  public static readonly NumberOfOpenings = 1;
  public static readonly NumberOfShutterPairsPerOpening = 1;
  public static readonly NumberOfDividers = 0;

  public static readonly Paint = false;

  public static readonly IsBeadAndRabbet = false;
  public static readonly BeadAndRabbetWidth = 0.5;

  public static readonly OpeningWidth = 36;
  public static readonly OpeningHeight = 60;

  public static readonly StileWidth = 2.375;
  public static readonly DividerWidth = CompanyDefaults.StileWidth;

  public static readonly TopRailWidth = 3.0;

  public static readonly ApproximateBottomRailWidth = 5.0;

  public static readonly BottomRailWidth = 4.5;
  public static readonly SlatSpacing = 1.625;

  public static readonly MiddleRailWidth = 3.0;

  // Board and Batten
  public static readonly NumberOfBoards = 3;
  public static readonly NumberOfBattens = 2;
  public static readonly BoardAndBattenShutterThickness = 0.875;

  // CNC
  public static readonly CNCBoardAndBattenDefaultOption = false;
  public static readonly CNCBoardAndBattenGrooveWidth = 0.375;
  public static readonly CNCBoardAndBattenGrooveExtension = 0.25;
  public static readonly CNCBoardAndBattenHoleDiameter = 0.3127; // slightly bigger to allow for easier dowel installation
  public static readonly CNCBoardAndBattenShutterHorizontalOffset = 0.03125;
  public static readonly CNCBoardAndBattenShutterVerticalOffset = 0.03125;
  public static readonly CNCBoardAndBattenFirstBattenVerticalOffset = 102.75;
  public static readonly CNCBoardAndBattenBattenVerticalOffset = 6.5;
  public static readonly CNCBoardAndBattenHoleHorizontalOffset = 3;

  // General Settings
  public static readonly ShowTooltips = true;
  public static readonly PrintInput = false;
  public static readonly PrintParameters = false;
  public static readonly FilterOn = "JobNumber";
  public static readonly UseInputForNumRails = false;
  public static readonly MaxNumberOfRails = 4;
  public static readonly MaxNumberOfDividers = 5;
  public static readonly StatusOptions = ["New", "In Progress", "Completed"];
  public static readonly DefaultJobStatus = CompanyDefaults.StatusOptions[0];
  public static readonly ShowGraphics = true;
  public static readonly IncludeNotesInPartsList = false;
  public static readonly IncludeShutterInPartsList = false;
  public static readonly ShowSectionsListTable = false;
  public static readonly TextScaleFactor = 1.2;
  public static readonly ShowCompletedJobs = true;

  public static readonly GraphicsWindowWidth = 5;
  public static readonly GraphicsWindowHeight = 7;
  public static readonly GraphicsWindowFontSize = 12;
  public static readonly GraphicsWindowTextSpacing = 1.2;

  // Lists

  public static readonly OpeningTypes = [
    { value: "FixedSlat", label: "Fixed", disable: false },
    { value: "RollingSlat", label: "Rolling", disable: false },
    { value: "SimulatedSlat", label: "Simulated", disable: false },
    { value: "RaisedPanel", label: "Raised Panel", disable: false },
    { value: "Bahama", label: "Bahama", disable: false },
    { value: "BoardAndBatten", label: "Board & Batten", disable: false },
  ];

  public static readonly ShutterThicknesses = [
    { value: 1.25, label: "1 1/4", disable: false },
    { value: 1.375, label: "1 3/8", disable: false },
    { value: 1.5, label: "1 1/2", disable: false },
    { value: 1.75, label: "1 3/4", disable: false },
  ];

  // TODO: These needs to come from itemlist in db
  public static readonly WoodType = "SPANISH CEDAR";
  public static readonly Thickness = 1.25;
  public static readonly ShutterThickness = 1.25;
}
