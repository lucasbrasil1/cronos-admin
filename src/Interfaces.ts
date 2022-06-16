export interface IUser {
    email: string;
    password: string;
}

export interface IHeader {
    pageTitle : string;
}

export interface ITextField {
    id: string;
    label : string;
    size : string;
    value : string;
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextArea {
    id: string;
    label : string;
    value : string;
    onChange : () => void;
}

export interface IIcon {
    size : number;
    color: string;
}

export interface IUnitRow {
    id: string;
    name: string;
    city: string;
}

export interface IDay {
    name: string;
    abreviation: string;
    isActive: boolean;
    availableHours : Array<ITimeRange>;
}

export interface ITimeRange {
    startTime : ITime;
    endTime : ITime;
}

export interface ITime {
    hour: number;
    minutes: number;
}

//#region Models

export interface IProfessional {
    id : number;
    name : string;
}



//#endregion
