import { Main } from '../src/app.js';

describe("BerlinClock function should return a matrice the TimeStamp", function(){

    const main = new Main();

    it("should return the correct Berlin clock format for 0 simple minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0)).getTime(); // actuellement 00:00
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("RRRR");
    });
});