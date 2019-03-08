import { Directive, ElementRef, Output, EventEmitter, HostBinding, HostListener, NgZone } from '@angular/core';

@Directive({
  selector: '[myrcDropfile]'
})
export class DropfileDirective {
  private inWindow = false;
  private inDropZone = false;

  @Output() filedroped = new EventEmitter<FileList>();
  @HostBinding('class.drophover') drophover = false;
  @HostListener('window:dragenter', ['$event'])
  private onDragEnter(event) {
    this.inWindow = true;
    this.updateHover();
  }
  @HostListener('window:dragleave', ['$event'])
  private onDragEnd(event) {
    this.inWindow = false;
    this.updateHover();
  }

  constructor(private el: ElementRef, private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.init();
    });
  }

  private init() {
    const preventDefault = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
    };

    this.el.nativeElement.addEventListener('dragenter', (event: any) => {
      this.inDropZone = true;
      this.updateHover();
    }, false);

    this.el.nativeElement.addEventListener('dragleave', (event: any) => {
      this.inDropZone = false;
      this.updateHover();
    }, false);


    this.el.nativeElement.addEventListener('drop', (event: any) => {
      preventDefault(event);
      this.inDropZone = false;
      this.updateHover();
      this.zone.run(() => {
        this.filedroped.next(event.dataTransfer.files);
      });
    }, false);


    this.el.nativeElement.addEventListener('dragover', (event: any) => {
      preventDefault(event);
    }, false);
  }

  private updateHover() {
    this.drophover = (this.inWindow || this.inDropZone);
  }
}
