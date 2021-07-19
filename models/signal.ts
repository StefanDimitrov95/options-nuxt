class SignalDetails {
    symbol: string;
    price: number;
    maxProfit: number;
    maxProfitPercent: number;
    maxLoss: number;
    be: number;
    probability: number;
    expData: Date;
    leg1Strike: number;
    leg1Bid: number;
    leg2Strike: number;
    leg2Ask: number;

    constructor(symbol: string, price: number, maxProfit: number, maxProfitPercent: number, maxLoss: number, 
        be: number, probability: number, expData: Date, leg1Strike: number, leg1Bid: number, leg2Strike: number, leg2Ask: number) {
        this.symbol = symbol;
        this.price = price;
        this.maxProfit = maxProfit;
        this.maxProfitPercent = maxProfitPercent;
        this.maxLoss = maxLoss;
        this.be = be;
        this.probability = probability;
        this.expData = expData;
        this.leg1Strike = leg1Strike;
        this.leg1Bid = leg1Bid;
        this.leg2Strike = leg2Strike;
        this.leg2Ask = leg2Ask;
    }
}
