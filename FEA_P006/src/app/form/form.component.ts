import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  camposDoForm: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.restCountries();
  }

  restCountries = async () => {
    try {
      const apiUrl = `https://restcountries.com/v3.1/all`;
      const response: any = await this.http.get(apiUrl).toPromise();
      
      if (response.length > 0) {
        const primeiroRegistro = response[0];
        this.camposDoForm = this.form(primeiroRegistro);
      } else {
        console.log("Não há registros na API.");
      }
    } catch (error) {
      console.error("Erro de requisição:", error);
    }
  };

  form(registro: any): any[] {
    const camposForm: any[] = [];
    for (const i in registro) {
      if (Object.prototype.hasOwnProperty.call(registro, i)) {
        const field = {
          type: typeof registro[i] === 'string' ? 'text' : 'unknown', 
          name: i,
          label: i
        };
        camposForm.push(field);
        console.log(camposForm)
      }
    }
    return camposForm;
  }
}
