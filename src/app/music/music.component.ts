import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  // musicianName:string;
  @Input()musicname:string;
  @Output()musicList=new EventEmitter<string>()
  
  constructor() { }

  ngOnInit(): void {
  }
  musicianList(){
    this.musicList.emit(this.musicname)
  }
}
