export interface jokeInt {
  data?: {
    success: boolean;
    body: [
      {
        _id: string;
        punchline: string;
        setup: string;
      }
    ];
  };
}

export interface scanInt {
  data: {
    data: {
      id: string;
      type: string;
    };
    message: string;
    code: string;
  };
}

export interface analysisInt {
  data: {
    data: {
      attributes: {
        results: {
          category: string;
          engine_name: string;
          method: string;
          result: string;
        };
        stats: {
          harmless: number;
          malicious: number;
          suspicious: number;
          undetected: number;
          timeout: number;
        };
        status: string;
      };
    };
    
  };
}

export interface resultInt {
  category?: string;
  engine_name?: string;
  method?: string;
  result?: string;
}
export interface statsInt {
  harmless?: number;
  malicious?: number;
  suspicious?: number;
  undetected?: number;
  timeout?: number;
}
