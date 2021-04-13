import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-on-prefix
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onFileDropped = new EventEmitter<any>();
  @Output() dragOverFile = new EventEmitter<any>();
  subscription: Subscription;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = '#FFF';
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.dataTransfer.dropEffect = 'Hebert';
    evt.preventDefault();
    evt.stopPropagation();
    this.dragOverFile.emit(true);
    this.el.nativeElement.style.backgroundColor = '#1f2223';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.dragOverFile.emit(false);
    this.el.nativeElement.style.backgroundColor = '#FFF';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    this.el.nativeElement.style.backgroundColor = '#FFF';
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

}
