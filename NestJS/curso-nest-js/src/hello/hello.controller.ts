import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common';
import { getUnpackedSettings } from 'http2';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';

@Controller()
export class HelloController {

    @Get('/')
    index() {
        return 'Home page';
    }

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return 'Something new';
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found ';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num+14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        return status;
    }

    @Get('greet')
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
        return `Hello ${query.name}, you are ${query.age} years old`;
    }
}
