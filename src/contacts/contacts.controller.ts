import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ContactsService } from "./contacts.service";
import { CreateContactsDto } from "./dto/create-contacts.dto";




@Controller('/contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }

  /**
 * 
 */

  @Get('')
public async getid(
  @Query('id') id :string,
) {
  return await this.contactsService.getPost(id);
}
@Get('lists')
  async getHello(
    @Query('page') page = 1,
    @Query('per_page') perPage: 4,
    @Query('keyword') keyword: String,
  ) {
    const Contact = await this.contactsService.getContacts();
   return Contact.Contacts
  }
@Post()  
  public async Postmessage(
    @Body() createContactsDto: CreateContactsDto,
  ){
    return await this.contactsService.Postmessage(createContactsDto)
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    console.log(id)
    return (await this.contactsService.deletePost(id));
  }

}