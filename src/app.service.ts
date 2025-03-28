import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async downloadPdf(filename, content){
    //const pdfName = "puppeteer.pdf";
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //set the HTML of this page
    await page.setContent(content);
    //save the page into a PDF and call it 'puppeteer-example.pdf'
    await page.pdf({ path: `./${filename}`, margin: {top: 90, right: 60, left: 60, bottom: 90} });
    //when, everything's done, close the browser instance.
    await browser.close();
}
}
