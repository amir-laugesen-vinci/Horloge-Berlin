import { Main } from '../src/app.js';

describe("BerlinClock function should return a matrice the TimeStamp", function(){

    const main = new Main();

    it("should return the correct Berlin clock format for 0 simple minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0)).getTime(); // actuellement 00:00
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("RRRR");
    });

    it("should return the correct Berlin clock format for 1 simple minute", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 1)).getTime(); // 00:01 et cetera jusqu'à 00:04
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("JRRR");
    });

    it("should return the correct Berlin clock format for 2 simple minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 2)).getTime();
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("JJRR");
    });

    it("should return the correct Berlin clock format for 3 simple minutes", function(){
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 3)).getTime();
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("JJJR");
    });

    it("should return the correct Berlin clock format for 4 simple minutes", function(){
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 4)).getTime();
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("JJJJ");
    });
});