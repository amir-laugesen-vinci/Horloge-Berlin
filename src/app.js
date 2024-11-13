export class Main {
    BerlinClock(timestamp) {
        const date = new Date(timestamp);
        
        const seconds = date.getUTCSeconds();
        const minutes = date.getUTCMinutes();
        const hours = date.getUTCHours();


        const simpleMinutes = minutes % 5;
        const minutesPar5 = Math.floor(minutes / 5);
        const simpleHours = hours % 5;
        const heuresPar5 = Math.floor(hours / 5);

        const lignesSimpleMinutes = 'O'.repeat(simpleMinutes) + 'C'.repeat(4 - simpleMinutes);
        const lignesMinutesPar5 = 'O'.repeat(minutesPar5) + 'C'.repeat(11 - minutesPar5);
        const lignesSimpleHours = 'O'.repeat(simpleHours) + 'C'.repeat(4 - simpleHours);
        const lignesHeurePar5 = 'O'.repeat(heuresPar5) + 'C'.repeat(4 - heuresPar5);

        const ampouleSecond = (seconds % 2 === 0) ? 'O' : 'C';

        return lignesSimpleMinutes + "\n" + lignesMinutesPar5 + "\n" + lignesSimpleHours + "\n" + lignesHeurePar5 + "\n" + ampouleSecond;


    }
}