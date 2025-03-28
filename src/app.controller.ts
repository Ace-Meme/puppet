import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/pdf')
  async downloadPdf(@Body() body, @Res() res){
      await this.appService.downloadPdf('puppeteer.pdf', body.content);
      const file = createReadStream('./puppeteer.pdf');
      file.pipe(res);
  }
}
