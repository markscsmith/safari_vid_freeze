import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'safari_vid_freeze';

  rows: number = 10;
  row_array: number[] = Array(this.rows)
  update() {
    this.row_array = Array(this.rows)
  }
  ngOnInit() {
    this.loadMore();
    this.continuousScroll();
  }
  scroll: boolean = false;

  @HostListener('document:keydown.space', ['$event'])
  toggle_scroll() {
    this.scroll = !this.scroll;
    console.log('Toggled scroll to: ' + this.scroll + '')
  }




  continuousScroll() {
    let amount : number = 0;
    if (this.scroll) {
      amount = window.innerHeight;
      
    }
      window.scrollBy(0, amount);
      setTimeout(() => {
        this.continuousScroll();
      }, 10);
    
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    
    if (windowBottom - docHeight < 1)  {
      this.loadMore();
    }
  }


  loadMore() {
    if (this.row_array.length > 200) {
      this.row_array = Array(this.rows)
    }
    this.row_array = this.row_array.concat(Array(this.rows))
    console.log("loading_more!")
  }


}
