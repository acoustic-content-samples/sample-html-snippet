import {
    LayoutComponent
} from 'ibm-wch-sdk-ng';
import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TypeHtmlSnippetComponent} from './../../components/html-snippet/typeHtmlSnippetComponent';

/*
 * @name htmlSnippetLayout
 * @id html-snippet-layout
 */
@LayoutComponent({
    selector: 'html-snippet-layout'
})
@Component({
    selector: 'app-html-snippet-layout-component',
    templateUrl: './htmlSnippetLayout.html',
    styleUrls: ['./htmlSnippetLayout.scss'],
    preserveWhitespaces: false
})
export class HtmlSnippetLayoutComponent extends TypeHtmlSnippetComponent implements AfterViewInit {

    /*
  * TODO add custom fields here. These fields should be those
  * specific to this layout.
  */
    @ViewChild('snippet') snippetElem: ElementRef;
    iframeHeight: string;
    iframeWidth: string;

    constructor() {
        super();
        /*
   * TODO initialize your custom fields here, note that
   * you can refer to the values bound via @RenderingContextBinding from
   * your super class.
   *
   * Make sure to call 'this.safeSubscribe' if you plan to subscribe to observables
   */
        this.safeSubscribe(this.onHeight, () => {
            this.resizeIFrame();
        });
        this.safeSubscribe(this.onWidth, () => {
            this.resizeIFrame();
        });
        this.safeSubscribe(this.onHtml, () => {
            this.resizeIFrame();
        });
        this.safeSubscribe(this.onJs, () => {
            this.resizeIFrame();
        });
        this.safeSubscribe(this.onCss, () => {
            this.resizeIFrame();
        });
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.snippetElem) {
            this.snippetElem.nativeElement.onload = () => {
                this.resizeIFrame();
            };
        }
    }

    resizeIFrame() {
        if (this.height) {
            this.iframeHeight = this.height;
        } else {
            if (this.snippetElem) {
                this.iframeHeight = this.snippetElem.nativeElement.contentDocument.documentElement.scrollHeight + 'px';
            } else {
                this.iframeHeight = '100%';
            }
        }
        if (this.width) {
            this.iframeWidth = this.width;
        } else {
            this.iframeWidth = '100%';
        }
    }
}
