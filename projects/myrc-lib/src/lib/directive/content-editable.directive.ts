import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[myrcContentEditable]'
})
export class ContentEditableDirective implements OnInit {
  @Input() myrcContentEditable: string;
  @Input() editableplaceholder: string;
  @Input() keysban: string[];
  @Input() options: string[];
  @Output() myrcContentEditableChange = new EventEmitter();

  @HostListener('focus') onFocus() {
    const value = this.el.nativeElement.innerText;
    if (value === this.editableplaceholder) {
      this.renderer.setProperty(this.el.nativeElement, 'innerText', null);
    }
  }
  @HostListener('blur') onBlur() {
    let value = this.el.nativeElement.innerText;
    // check if value is equal to option
    if (this.options) {
      if (this.options.indexOf(value) === -1) {
        value = null;
      }
      this.renderer.removeAttribute(this.el.nativeElement, 'data-complete');
    }

    if (!value) {
      value = null;
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.editableplaceholder);
    }

    this.myrcContentEditableChange.emit(value);
  }
  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    // check banned key
    if (this.keysban) {
      if (this.keysban.indexOf(event.key) > -1) {
        event.preventDefault();
        return false;
      }
    }

    // console.log(event.key);
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      // check if an options correspond
      if (this.options) {
        this.renderer.setProperty(this.el.nativeElement, 'innerText', this.getFirstMatch(this.options));
      }

      this.el.nativeElement.blur();
      return false;
    }
  }
  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent) {
    // check if start with
    if (this.options) {
      const corespondance = this.getFirstMatch(this.options);

      if (corespondance) {
        this.renderer.setAttribute(this.el.nativeElement, 'data-complete', corespondance);
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, 'data-complete');
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement, 'contenteditable', 'true');
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.myrcContentEditable || this.editableplaceholder);
  }

  private getFirstMatch(options): string {
    const value = this.el.nativeElement.innerText;
    return options.find((option) => {
      const re = new RegExp(`^${value}`, 'i');
      return re.test(option);
    });
  }
}
