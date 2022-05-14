import { Component } from '@angular/core';
import { SvgModel } from './_models/svg.model';
import { SvgService } from './_services/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  resizeWidth: number = 0;
  resizeHeight: number = 0;
  positionLeft: number = 0;
  positionTop: number = 0;

  updatedWidth: number;
  updatedHeight: number;
  updatedLeft: number;
  updatedTop: number;

  constructor(private svgService: SvgService) {
    this.getDataFromJson();
  }

  ngOnInit() { }

  getDataFromJson() {
    this.svgService.getConfig().subscribe(data => {
      // console.log("FROM JSON:", data);

      this.resizeWidth = data.Width;
      this.resizeHeight = data.Height;

      this.positionLeft = data.Left;
      this.positionTop = data.Top;
    }, error => { });
  }

  addWidth(modifiedWidth: number) {
    this.updatedWidth = modifiedWidth;
  }

  addHeight(modifiedHeight: number) {
    this.updatedHeight = modifiedHeight;
  }

  addLeft(modifiedLeft: number) {
    this.updatedLeft = modifiedLeft;
  }

  addTop(modifiedTop: number) {
    this.updatedTop = modifiedTop;
  }

  svgPerimeter = new SvgModel();
  updateJsonFile() {
    this.svgPerimeter.Width = Math.round(this.updatedWidth);
    this.svgPerimeter.Height = Math.round(this.updatedHeight);
    this.svgPerimeter.Left = Math.round(this.updatedLeft);
    this.svgPerimeter.Top = Math.round(this.updatedTop);

    // console.log("TO JSON:", this.svgPerimeter);

    this.svgService.setConfig(this.svgPerimeter).subscribe(data => {
      alert("Perimeters updated successfully.");
    }, error => { });
  }
}