import { Main } from '../src/app.js';

describe("BerlinClock function should return a matrice the TimeStamp", function(){

    const main = new Main();

    //testr pour les minutes simples
    it("should return the correct Berlin clock format for 0 simple minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0)).getTime(); // actuellement 00:00
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("CCCC");
    });

    it("should return the correct Berlin clock format for 1 simple minute", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 1)).getTime(); // 00:01 et cetera jusqu'à 00:04
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OCCC");
    });

    it("should return the correct Berlin clock format for 2 simple minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 2)).getTime();
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OOCC");
    });

    it("should return the correct Berlin clock format for 3 simple minutes", function(){
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 3)).getTime();
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OOOC");
    });

    it("should return the correct Berlin clock format for 4 simple minutes", function(){
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 4)).getTime();
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OOOO");
    });

    // Tests pour les minutes par 5
    it("should return the correct Berlin clock format for 0 minutes by 5", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0)).getTime(); // 00:00
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("CCCCCCCCCCC"); // 0 blocs de 5 minutes allumés
    });

    it("should return the correct Berlin clock format for 1 block of 5 minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 5)).getTime(); // 00:05
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OCCCCCCCCCC"); // 1 bloc de 5 minutes allumé
    });

    it("should return the correct Berlin clock format for 2 blocks of 5 minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 10)).getTime(); // 00:10
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OOCCCCCCCCC"); // 2 blocs de 5 minutes allumés
    });

    it("should return the correct Berlin clock format for 3 blocks of 5 minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 15)).getTime(); // 00:15
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OOOCCCCCCCC"); // 3 blocs de 5 minutes allumés
    });

    it("should return the correct Berlin clock format for 4 blocks of 5 minutes", function() {
        const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 20)).getTime(); // 00:20
        const result = main.BerlinClock(timestamp);
        expect(result).toBe("OOOOCCCCCCC"); // 4 blocs de 5 minutes allumés
    });
});