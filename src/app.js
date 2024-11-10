export class Main {
    BerlinClock(timestamp) {
        const date = new Date(timestamp);
        
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();

        const simpleMinutes = minutes % 5;
        const minutesPar5 = Math.floor(minutes / 5);

        const lignesMinutesPar5 = 'O'.repeat(minutesPar5) + 'C'.repeat(11 - minutesPar5);
        const lignesSimpleMinutes = 'O'.repeat(simpleMinutes) + 'C'.repeat(4 - simpleMinutes);

        const simpleHours = hours % 5;
        const lignesSimpleHours = 'O'.repeat(simpleHours) + 'C'.repeat(4 - simpleHours);
        return lignesSimpleMinutes + "\n" + lignesMinutesPar5 + "\n" + lignesSimpleHours;
    }
}