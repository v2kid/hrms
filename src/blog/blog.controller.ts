import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";
import { ApiBearerAuth } from "@nestjs/swagger";

import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { AuthGuard } from "src/auth/auth.guard";


@Controller('/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  /**
 * 
 */

  @Get('')
public async getid(
  @Query('id') id :string,
) {
  return await this.blogService.getPost(id);
}
@Get('posts')
  async getHello(
    @Query('page') page = 1,
    @Query('per_page') perPage: 6,
    @Query('keyword') keyword: String,
  ) {
  const Post =await this.blogService.getPosts(
    page as number,
    perPage as number,
    keyword 
  );
    return Post.Post;
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log(id)
    return (await this.blogService.deletePost(id));
  }
  @UseGuards(AuthGuard)
  @Post('postBlog')
  async signUp(
    @Body() createBlogDto: CreateBlogDto,
  ) {
    const blog = await this.blogService.postBlog(createBlogDto);
    return blog;
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.updateBlog(id,updateBlogDto );
  }
}