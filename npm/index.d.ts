declare module '@apiverve/worldholidays' {
  export interface worldholidaysOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface worldholidaysResponse {
    status: string;
    error: string | null;
    data: WorldHolidaysData;
    code?: number;
  }


  interface WorldHolidaysData {
      country:  string;
      year:     string;
      holidays: Holiday[];
  }
  
  interface Holiday {
      date:  Date;
      start: Date;
      end:   Date;
      name:  string;
      type:  Type;
  }
  
  enum Type {
      Observance = "observance",
      Optional = "optional",
      Public = "public",
  }

  export default class worldholidaysWrapper {
    constructor(options: worldholidaysOptions);

    execute(callback: (error: any, data: worldholidaysResponse | null) => void): Promise<worldholidaysResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: worldholidaysResponse | null) => void): Promise<worldholidaysResponse>;
    execute(query?: Record<string, any>): Promise<worldholidaysResponse>;
  }
}
