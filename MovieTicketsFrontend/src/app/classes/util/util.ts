export class Util {

    private static date: string = '10 March 2023';

    static formatTimeToAmOrPm(time: string): string {
        return new Date(`${Util.date} ${time}`).toLocaleTimeString('en-Us', { hour: '2-digit', minute: '2-digit' });
    }

    static extractTimeAndConvertToNumber(time: string): number {
        return new Date(`${Util.date} ${time}`).getTime();
    }

    static formatDate(date: any): string {
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    }

    static findEndDate(dates: any[]): Date {
        let tempDate = new Date();
        if (dates)
            for (let i = 0; i < dates.length; i++)
                if (new Date(dates[i]) > tempDate)
                    tempDate = new Date(dates[i]);
        return tempDate;
    }

    static getTomarrow(date: any): Date {
        const temp = new Date(date);
        return new Date(temp.getFullYear(), temp.getMonth(), (temp.getDate() + 1));

    }

    static getYestarday(date: any): Date {
        const day = 86400000;
        const temp = new Date(date);
        return new Date(temp.getTime() - day);

    }

    static sortByDates(date1: any, date2: any): number {
        return new Date(date1).getTime() - new Date(date2).getTime();
    }

    static numberField(event: any): boolean {
        let charCode: number = event.keyCode;
        return (charCode > 31 && (charCode < 48 || charCode > 57)) ? false : true;
    }

    static getFormatedtime(date: any): string {
        return new Date(date).toLocaleTimeString('en-US');
    }

}
