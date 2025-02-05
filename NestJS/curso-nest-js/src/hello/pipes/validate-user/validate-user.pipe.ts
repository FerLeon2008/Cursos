import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus, HttpException } from '@nestjs/common';
import { parse } from 'path';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value', value);

    const ageNumber = parseInt(value.age.toStirng(),10);

    if(isNaN(ageNumber)){
        throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    return {...value, age:ageNumber};
  }
}
