import { Component,OnInit,Input} from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!:FaceSnap


  buttonText! : string;
  constructor(private faceSnapsService: FaceSnapsService,
    private router: Router) {}

   ngOnInit(): void {
    this.buttonText = "💗"
  }
  onSnap() {
    if (this.buttonText ==="💗") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "😒" ;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText="💗";
    }
  }
  onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
