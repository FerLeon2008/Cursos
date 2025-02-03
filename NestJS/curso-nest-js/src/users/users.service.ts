import { Injectable } from '@nestjs/common';
import { UserProps } from './userProps/user.props';

@Injectable()
export class UsersService {
    private users: UserProps[] = [
        {
            id: 1,
            name: 'John Doe',
            phone: '1234567890',
        },
        {
            id: 2,
            name: 'Jane Doe',
            phone: '0987654321',
        },  
    ]

    getUsers() {
        return this.users;
    }
}
