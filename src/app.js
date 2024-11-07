export class Main{
    BerlinClock(timeStamp){
        console.log("test")

        const date = new Date(timeStamp);

        
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        return hours;
        
    }
}