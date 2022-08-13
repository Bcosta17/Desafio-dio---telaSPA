import { Component} from '@angular/core';
import { User } from './user';


@Component({
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})

export class UserComponent {
    users: User[] = [];
   
    ngOnInit(): void {
        this.users = [
            {
                name: 'Patricia Boyle',
                imageUrl: 'assets/images/img2.jpg',
                email: 'patriab@zillium.com',
                phoneNumber: 9999999,
                addedOn: "12/08/2022",
            },
            {
                name: 'Nathan brooks',
                imageUrl: 'assets/images/img1.jpg',
                email: 'nbrooks@zillium.com',
                phoneNumber: 99999999,
                addedOn: "12/05/2022",
            },
            {
                name: 'Jasmine Franks',
                imageUrl: 'assets/images/img3.jpg',
                email: 'nbrooks@zillium.com',
                phoneNumber: 99999999,
                addedOn: "12/05/2022",
            },
            {
                name: 'Charlis Stone',
                imageUrl: 'assets/images/img4.jpg',
                email: 'nbrooks@zillium.com',
                phoneNumber: 99999999,
                addedOn: "12/05/2022",
            },
        ]
    }
}