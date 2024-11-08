import { Main } from '../src/app.js';

describe("BerlinClock function should return a matrice the TimeStamp", function(){

    const main = new Main();

    it("should return the correct Berlin clock format for a given timestamp", function() {
        const timestamp = 43200 * 1000;
        const date = new Date(timestamp);
        const result = main.BerlinClock(timestamp);

        console.log(date)

        expect(result).toBe(13);
    });
});