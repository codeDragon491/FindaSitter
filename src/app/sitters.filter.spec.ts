import { TestBed, async } from '@angular/core/testing';
import { FilterSitters } from './sitters.filter';


describe('App: Sitters', () => {
    beforeEach(() => {
        this.sitters = [
            {
                _id: "5adcbe2eb1c290b436e1af09",
                firstname: "Elin",
                lastname: "Skult",
                birthdate: "1992-03-15T23:00:00.000Z",
                gender: "female",
                area: "København Ø",
                rate: "150 DKK",
                rating: [10, 9, 8, 10]
            },
            {
                _id: "5adcbe55b1c290b436e1af0a",
                firstname: "Jasmine",
                lastname: "Johanson",
                birthdate: "1995-03-08T23:00:00.000Z",
                gender: "female",
                area: "København Ø",
                rate: "200 DKK",
                rating: [3, 7, 5, 4]
            },
            {
                _id: "5ad309337cbda3002a7e92e0",
                firstname: "Jenny",
                lastname: "Lopez",
                birthdate: "2018-05-23T22:00:00.000Z",
                area: "København Ø",
                rate: "125 DKK",
                rating: [10, 9, 8, 10]
            }

        ];
        TestBed.configureTestingModule({
            declarations: [
                FilterSitters
            ],
        });
    });

    describe('FilterSitters ', () => {
        let pipe = new FilterSitters();
        it('No search string returns input', () => {
            let result = pipe.transform(this.sitters, '');
            expect(result.length).toBe(3);
        });

        it('Empty array returns empty array', () => {
            let result = pipe.transform([], 'Hi');
            expect(result.length).toBe(0);
        });
        it('Firstname search returns sitter', () => {
            let result = pipe.transform(this.sitters, 'Jenny');
            expect(result.length).toBe(1);
        });
        it('Lastname search returns sitter', () => {
            let result = pipe.transform(this.sitters, 'Winston');
            expect(result.length).toBe(1);
        });
        it('Rate search returns sitter', () => {
            let result = pipe.transform(this.sitters, '150');
            expect(result.length).toBe(1);
        });
        it('Date search returns sitter', () => {
            let result = pipe.transform(this.sitters, '1992-03-15');
            expect(result.length).toBe(1);
        });
        it('Average rating search returns sitter', () => {
            let result = pipe.transform(this.sitters, '9');
            expect(result.length).toBe(2);
        });

        //...
    });
});
