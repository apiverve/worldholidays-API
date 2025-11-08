declare module '@apiverve/worldholidays' {
  export interface worldholidaysOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface worldholidaysResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class worldholidaysWrapper {
    constructor(options: worldholidaysOptions);

    execute(callback: (error: any, data: worldholidaysResponse | null) => void): Promise<worldholidaysResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: worldholidaysResponse | null) => void): Promise<worldholidaysResponse>;
    execute(query?: Record<string, any>): Promise<worldholidaysResponse>;
  }
}
