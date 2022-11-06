export interface CoinData {
  id?: string;
  name: string;
  image: string;
  symbol: string;
  current_price:  number | any;
  market_cap:  number | any;
  price_change_24h?: number;
  price_change_percentage_24h: number;
  total_supply?: number;
  total_volume?: number;
  last_updated?: Date;
}
