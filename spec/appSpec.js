import { Main } from '../src/app.js';

describe("BerlinClock function should return a string the TimeStamp", function(){
    const main = new Main();

    // Test des minutes simples
        it("should return the correct Berlin clock format for 0 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0)).getTime();  // 00:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 1 simple minute", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 1)).getTime();  // 00:01
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nCCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 2 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 2)).getTime();  // 00:02
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOCC\nCCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 3 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 3)).getTime();  // 00:03
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOOC\nCCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 4 simple minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 4)).getTime();  // 00:04
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOOO\nCCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 5 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 5)).getTime();  // 00:05
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 10 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 10)).getTime();  // 00:10
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 11 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 11)).getTime();  // 00:11
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nOOCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 15 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 15)).getTime();  // 00:15
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 35 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 35)).getTime();  // 00:35
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 40 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 40)).getTime();  // 00:40
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 45 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 45)).getTime();  // 00:45
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOOCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 50 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 50)).getTime();  // 00:50
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOOOC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 55 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 55)).getTime();  // 00:55
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nOOOOOOOOOOO\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 61 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 61)).getTime();  // 00:61
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nCCCCCCCCCCC\nOCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 2 hours", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 2, 0)).getTime();  // 02:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nOOCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 3 hours and 6 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 3, 6)).getTime();  // 03:06
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nOCCCCCCCCCC\nOOOC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 4 hours and 12 minutes", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 4, 12)).getTime();  // 04:12
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OOCC\nOOCCCCCCCCC\nOOOO\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for 5 hours", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 5, 0)).getTime();  // 05:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nCCCC\nOCCC\nO");
        });

        
        it("should return the correct Berlin clock format for 5 hours and 1 minute", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 5, 1)).getTime();  // 05:01
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("OCCC\nCCCCCCCCCCC\nCCCC\nOCCC\nO");
        });

        it("should return the correct Berlin clock format for 10 hours", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 10, 0)).getTime();  // 10:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nCCCC\nOOCC\nO");
        });

        it("should return the correct Berlin clock format for 23 hours", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 23, 0)).getTime();  // 23:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nOOOC\nOOOO\nO");
        });

        it("should return the correct Berlin clock format for even seconds", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0, 0)).getTime();  // 00:00:00
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nCCCC\nCCCC\nO");
        });

        it("should return the correct Berlin clock format for odd seconds", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0, 1)).getTime();  // 00:00:01
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nCCCC\nCCCC\nC");
        });

        it("should return the correct Berlin clock format for 3 seconds", function() {
            const timestamp = new Date(Date.UTC(1970, 0, 1, 0, 0, 3)).getTime();  // 00:00:03
            const result = main.BerlinClock(timestamp);
            expect(result).toBe("CCCC\nCCCCCCCCCCC\nCCCC\nCCCC\nC");
        });

    });