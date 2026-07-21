import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  @Input() set pdfSrc(value: string) {
    this._pdfSrc = value;
    this.safePdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
  get pdfSrc(): string {
    return this._pdfSrc;
  }

  @Input() isOpen = false;
  @Input() title = 'CV';
  @Output() closed = new EventEmitter<void>();

  _pdfSrc = '';
  safePdfSrc: SafeResourceUrl = '';
  isFullscreen = false;
  isClosing = false;
  isLoading = true;
  iframeLoaded = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safePdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this._pdfSrc);
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen && !this.isClosing) {
      this.onClose();
    }
  }

  onClose(): void {
    this.isClosing = true;
    this.iframeLoaded = false;
    this.isLoading = true;
    setTimeout(() => {
      this.isClosing = false;
      this.closed.emit();
    }, 350);
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('pdf-modal-overlay')) {
      this.onClose();
    }
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }

  onIframeLoad(): void {
    this.isLoading = false;
    setTimeout(() => {
      this.iframeLoaded = true;
    }, 100);
  }
}
