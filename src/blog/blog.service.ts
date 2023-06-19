import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { blogModel } from "src/schema/blog.schema";
import { CreateBlogDto } from "./dto/create-blog.dto";
import { UpdateBlogDto } from "./dto/update-blog.dto";



@Injectable()
export class BlogService {
    [x: string]: any;
    constructor(@InjectModel('Blog') private blogModel: Model<blogModel>) {
    }
    public async getPost(id : string){
      const Post = await this.blogModel.findById({ _id: id })
      return Post;
    }
    public async getPosts(
      page: number = null,
      perPage: number = null,
      keyword : String,
      ) {
        return {
          Post: await this.blogModel
        .find({title: new RegExp (keyword as string) }) // where email like %keyword%
        .skip((page-1)*6)
        .limit(perPage as number)
        .exec(),
        };
    }
    public async deletePost(id: string): Promise<any> {
      const _id = id
      return await this.blogModel.findByIdAndDelete(_id)
   }

   public async postBlog(createBlogDto: CreateBlogDto) {
      const createdBlog = new this.blogModel(createBlogDto)
      return await createdBlog.save();
    }
    public async updateBlog(id: string, UpdateBlogDto: UpdateBlogDto): Promise<any> {
        const updatedblog = await this.blogModel.findOneAndUpdate({ _id: id }, UpdateBlogDto).exec()
        return updatedblog
      // if  (await this.blogModel.findOneAndUpdate({ _id: id }, UpdateBlogDto).exec()) {
      //   return 'user';
      // } else {
      //   return 'sua that bai';
      // }
    }
  }