export class Main{
    BerlinClock(timestamp){
        const date = new Date(timestamp);

        const minutes = date.getUTCMinutes();

        console.log("const date : ", date);
        console.log("les minutes : ", minutes);

        const simpleMinutes = minutes%5;
        const lignesSimpleMinutes = 'O'.repeat(simpleMinutes) + 'C'.repeat(4 - simpleMinutes);

        //return lignesSimpleMinutes;

        const MinutesPar5 = Math.floor(minutes / 5);
        const lignesMinutesPar5 = 'O'.repeat(MinutesPar5) + 'C'.repeat(11 - MinutesPar5);

        console.log("lignes simple minutes: ", lignesSimpleMinutes);
        console.log("lignes minutes par 5: ", lignesMinutesPar5);

        return lignesMinutesPar5;
    }
}