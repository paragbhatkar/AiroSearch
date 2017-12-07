export class uiAirlines {
    id: number;
    name: string;
    tagLine: string;
    class: {
        economy: boolean;
        executive: boolean
    };
    address: {
        line1: string;
        line2: string;
        line3: string;
        city: string;
        pincode: string;
        state: string;
        country: string
    };
    rating: number;
    userRating: number;
    description: string
}