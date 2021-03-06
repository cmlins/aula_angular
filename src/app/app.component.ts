import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  new = 'começa logo meu ';
  imgSrc = 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_962466980_405772.jpg';
  imgSize = 200;
  valor = 0;
  divStyle = "background:blue;color:#ffffff; width: 100%; padding: 5px;"
  pessoas =[
    {
      nome:"Beatriz",
      idade:"20",
      telefone:"(99) 99999-9999",
      sexo:"Feminino"
    },
    {
      nome:"Jeferson",
      idade:"38",
      telefone:"(99) 99999-9999",
      sexo:"Masculino"
    },
    {
      nome:"Yuri",
      idade:"20",
      telefone:"(99) 99999-9999",
      sexo:"Masculino"
    },
    {
      nome:"Guilherme",
      idade:"20",
      telefone:"(99) 99999-9999",
      sexo:"Masculino"
    }

  ]

  model = {
    nome:"",
    idade:"",
    telefone:"",
    sexo:""
  }

  addPessoa() {
    this.pessoas.push({
      ...this.model
    })
  }

  mudarTitulo(titulo: string){
    this.title = titulo;
  }

  mudarImgSize(imgSize: string){
    this.imgSize = parseInt(imgSize);
  }

  mudarValor(valorp: string){
    this.valor = parseInt(valorp);
  }

}
