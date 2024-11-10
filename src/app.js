export class Main {
    BerlinClock(timestamp) {
        const date = new Date(timestamp);
        
        const minutes = date.getUTCMinutes();

        const simpleMinutes = minutes % 5;
        const minutesPar5 = Math.floor(minutes / 5);

        const lignesMinutesPar5 = 'O'.repeat(minutesPar5) + 'C'.repeat(11 - minutesPar5);
        const lignesSimpleMinutes = 'O'.repeat(simpleMinutes) + 'C'.repeat(4 - simpleMinutes);

        // Retourner les lignes des minutes par 5 et des minutes simples combinées

        return lignesSimpleMinutes + "\n" + lignesMinutesPar5;
    }
}