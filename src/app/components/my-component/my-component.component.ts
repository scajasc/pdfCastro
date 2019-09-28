import { Component, OnInit, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { viewClassName, Element } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
generarPDF(){
    html2canvas(document.getElementById("contenedor")).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF();
    doc.addImage(img,'PNG',-23,-190,250,330,-350,-200);
    doc.save('Certificado.pdf');
    });
  }
print(){
    
    window.focus();
    window.print();
    }

  constructor() { 

  }

  ngOnInit() {
  }

}
