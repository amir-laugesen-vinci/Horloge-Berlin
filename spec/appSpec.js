import { Main } from '../src/app.js';

describe("BerlinClock function should return a matrice the TimeStamp", function(){
    const main = new Main();

    // Test des minutes simples
    describe("Test des minutes simples", function() {
        it("should return the correct Berlin clock format for 0 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0)).getTime();  // 00:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 1 simple minute", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 1)).getTime();  // 00:01
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nCCCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 2 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 2)).getTime();  // 00:02
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOCC\nCCCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 3 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 3)).getTime();  // 00:03
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOOC\nCCCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 4 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 4)).getTime();  // 00:04
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOOO\nCCCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 5 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 5)).getTime();  // 00:05
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOCCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 10 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 10)).getTime();  // 00:10
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 11 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 11)).getTime();  // 00:11
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nOOCCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 15 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 15)).getTime();  // 00:15
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOCCCCCCCC");
        });

        it("should return the correct Berlin clock format for 35 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 35)).getTime();  // 00:35
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOCCCC");
        });

        it("should return the correct Berlin clock format for 40 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 40)).getTime();  // 00:40
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOCCC");
        });

        it("should return the correct Berlin clock format for 45 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 45)).getTime();  // 00:45
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOOCC");
        });

        it("should return the correct Berlin clock format for 50 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 50)).getTime();  // 00:50
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOOOC");
        });

        it("should return the correct Berlin clock format for 55 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 55)).getTime();  // 00:55
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOOOO");
        });

        it("should return the correct Berlin clock format for 61 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 61)).getTime();  // 00:61
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nCCCCCCCCCCC");
        });
    });
});