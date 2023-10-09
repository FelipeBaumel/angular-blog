import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = "https://conteudo.imguol.com.br/c/entretenimento/dd/2018/05/17/viggo-mortensen-como-aragorn-na-trilogia-o-senhor-dos-aneis-1526603479172_v2_4x3.jpg";
  @Input()
  contentTitle: string="NOTICIA EXEMPLO";
  @Input()
  contentDescription: string="blablabla";

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe(value => 
      console.log(value.get('id'))
      )
  };
}
