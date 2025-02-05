import { Controller, Get, HttpCode } from '@nestjs/common';

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
}
