import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.create.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            email: 'ejemplo1@gmail.com',
            password: '123456',
            name: 'John Doe',
            age: 30,
        },
        {
            id: 2,
            email: 'ejemplo2@hotmail.com',
            password: '12345678',
            name: 'Jane Doe',
            age: 25,
        },  
    ]

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {

        this.users.push(user)
        return {
            id: this.users.length + 1,
            ...user,
        };
    }

}
