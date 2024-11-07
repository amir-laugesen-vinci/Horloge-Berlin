import { Main } from '../../src/app.js';

describe("BerlinClock function should return a matrice the TimeStamp", function(){

    const main = new Main();

    it("should return the correct Berlin clock format for a given timestamp", function() {
        const timestamp = 1730995452 * 1000;
        const result = main.BerlinClock(timestamp);

        console.log("yo bg");

        expect(result).toBe(13);
    });
});