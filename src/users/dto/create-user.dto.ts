// src/users/dto/create-user.dto.ts

import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsInt()
  @ApiProperty({ description: '用户 ID' })
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: '用户名' })
  name: string;

  @IsInt()
  @ApiProperty({ description: '用户年龄' })
  age: number;
}
