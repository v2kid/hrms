import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { blogModel } from "src/schema/blog.schema";
import { contactModel } from "src/schema/contact.schema";
import { CreateContactsDto } from "./dto/create-contacts.dto";




@Injectable()
export class ContactsService {
    [x: string]: any;
    constructor(@InjectModel('Contacts') private contactsModel: Model<contactModel>) {
    }
    public async getPost(id : string){
      const Post = await this.blogModel.findById({ _id: id })
      return Post;
    }
    public async getContacts( 
      ) {
        return {
          Contacts: await this.contactsModel.find()
        };
    }
    public async Postmessage(CreateContactsDto : CreateContactsDto){
      return await this.contactsModel.create(CreateContactsDto)
    }
    public async deletePost(id: string): Promise<any > {
      const _id = id
      return await this.blogModel.findByIdAndDelete(_id)
   }

  }