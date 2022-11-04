import { Component, OnInit } from '@angular/core';

/**
 * Defining FAQS interface
 * The FAQ interface has an isOpen property which will be used in the html
 * to dynamically set an active class if the user clicks on the accordion
 */
interface FAQS {
  id: string;
  answer: string;
  question: string;
  isOpen: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Accordion Tutorial';
  data: FAQS[] = [];

  ngOnInit() {
    /**
     * Fetching the faqs.json from the assets folder via HTTP GET.
     */
    fetch('/assets/faqs.json', { method: 'GET' })
      .then((response) => response.json())
      .then((faqs) => {
        /** Setting the isOpen property to false by default, the value will be
         * Changed by the user when the click the accordion
         */
        this.data = faqs.map((faq: any) => ({
          ...faq,
          isOpen: false,
        })) as FAQS[];
      });
  }

  toggleAccordion(index: number) {
    // Toggling the value of the isOpen Property
    this.data[index].isOpen = !this.data[index].isOpen;
  }
}
