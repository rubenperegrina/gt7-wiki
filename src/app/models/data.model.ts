export class Data {
    constructor(
        public updatetimestamp:    Date,
        public used:               CarData,
        public legend:             CarData,
        public dailyrace:          Dailyrace
    ) {}
}

export interface Dailyrace {
    date:  string;
    races: Race[];
}

export interface Race {
    courseid:              string;
    crsbase:               string;
    track:                 string;
    logo:                  string;
    region:                Region;
    laps:                  number;
    cars:                  number;
    starttype:             string;
    fuelcons:              number;
    tyrewear:              number;
    cartype:               string;
    widebodyban:           boolean;
    nitrousban:            boolean;
    tyres:                 string[];
    requiredtyres:         string[];
    bop:                   boolean;
    carsettings_specified: boolean;
    garagecar:             boolean;
    carused:               string;
    damage:                string;
    shortcutpen:           boolean;
    carcollisionpen:       boolean;
    pitlanepen:            boolean;
    time:                  number;
    offset:                number;
    schedule:              number[];
    cartags?:              string;
    pplimit?:              string;
    category?:             string;
}

export enum Region {
    De = "de",
    Fr = "fr",
    GB = "gb",
    It = "it",
    Jp = "jp",
    Us = "us",
}

export interface CarData {
    date: string;
    cars: Car[];
}

export interface Car {
    carid:           string;
    manufacturer:    string;
    region:          Region;
    name:            string;
    credits:         number;
    state:           State;
    estimatedays:    number;
    maxestimatedays: number;
    new:             boolean;
}

export enum State {
    Limited = "limited",
    Normal = "normal",
    Soldout = "soldout",
}
