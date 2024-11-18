import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss'
})
export class WorldComponent implements OnInit {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object){}

  loadCountryData(svgCountry: SVGPathElement): Observable<any> {
    let api: string = `https://api.worldbank.org/v2/country/${svgCountry.id}?format=json`;  //Takes data from world bank using API
    return this.http.get(api); 
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

      Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {

        svgCountry.addEventListener('click', () => {
          this.loadCountryData(svgCountry).subscribe(data => {
            let dataPath: any = data[1];

            //Data from API call
            let name: string = dataPath[0].name;
            document.getElementById('name')!.innerText = name;

            let capital: string = dataPath[0].capitalCity;
            document.getElementById('capital')!.innerText = capital;

            let region: string = dataPath[0].region.value;
            document.getElementById('region')!.innerText = region;

            let income: string = dataPath[0].incomeLevel.value;
            document.getElementById('income')!.innerText = income;

            let longitude: string = dataPath[0].longitude;
            document.getElementById('longitude')!.innerText = longitude;

            let latitude: string = dataPath[0].latitude;
            document.getElementById('latitude')!.innerText = latitude;

          });
        });

        svgCountry.addEventListener('mouseover', (event:MouseEvent)=> {
          const path = event.target as SVGPathElement;                              //Changed the color of selected country when selected
          path.style.fill = '#FFA500';
        });

        svgCountry.addEventListener('mouseleave', (event:MouseEvent)=> {
          const path = event.target as SVGPathElement;                              //Reverts back to base color when unselected
          path.style.fill = '';
        });

      });
    }
  }
}
