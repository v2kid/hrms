import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Blog, BlogSchema } from 'src/schema/blog.schema';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { Contacts, ContactsSchema } from 'src/schema/contact.schema';



@Module({
  imports: [
    JwtModule,
    PassportModule,
    MongooseModule.forFeature([{ name: Contacts.name, schema: ContactsSchema }]),
  ],
  controllers: [ContactsController], 
  providers: [ContactsService],
  exports : [ContactsService]
})
export class ContactsModule { }
