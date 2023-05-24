export interface BookDTO {
  key: string;
  authors: {
    name: string;
  }[];
  title: string;
  cover?: {
    small: string;
    medium: string;
    large: string;
  };
  cover_id?: string;
  genres?: string[];
  resume?: string[];
  price?: string;
  rate?: string;
}
