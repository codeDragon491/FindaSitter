import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Sitter } from './home/entities/sitter';
@Pipe({ name: 'filterSitters' })
@Injectable()
export class FilterSitters implements PipeTransform {
    transform(items: Sitter[], args: string): any {
        if (args && items.length > 0) {
            let getAvg = (arr) => {
                let sum = 0;
                for (var i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                let average = Math.round((sum / arr.length))
                return average;
            }
            let itemsFound = items.filter(
                item => item.firstname && item.firstname.toLowerCase().includes(args.toLowerCase())
                    || item.lastname && item.lastname.toLowerCase().includes(args.toLowerCase())
                    || item.username && item.username.toLowerCase().includes(args.toLowerCase())
                    //|| item.birthdate && item.birthdate.toString().includes(args.toString())
                    || item.area && item.area.toLowerCase().includes(args.toLowerCase())
                    || getAvg(item.rating) && getAvg(item.rating).toString().includes(args)
                    || item.rate && item.rate.toString().includes(args)
                //|| (item.rating.reduce((x, y) => x + y) / (item.rating.length)).toString().includes(args)

            );

            //items.map(item => console.log("avgRating", getAvg(item.rating)));


            if (itemsFound && itemsFound.length > 0) {
                return itemsFound;
            }
            return [-1]; // to display error message (none found) in view.
        }
        return items;
    }
}
