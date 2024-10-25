import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users') // 添加此行
@Controller('users')
export class UsersController {

  // 注入 UsersService
  constructor(private readonly usersService: UsersService) {}

  // 处理 GET /users 请求
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // 处理 GET /users/:id 请求
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id))
  }

  // 处理 POST /users 请求
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
