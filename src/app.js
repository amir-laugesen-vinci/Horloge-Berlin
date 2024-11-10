export class Main{
    BerlinClock(timestamp){
        const date = new Date(timestamp);
        const minutes = date.getUTCMinutes();

        const simpleMinutes = minutes%5;
        const lignesSimpleMinutes = 'O'.repeat(simpleMinutes) + 'C'.repeat(4-simpleMinutes);

        return lignesSimpleMinutes;

    }
}