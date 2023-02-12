import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from '../joi-validation.pipe';
import createPostSchema, { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  @Post()
  @UsePipes(new JoiValidationPipe(createPostSchema))
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postSe
  }
}
