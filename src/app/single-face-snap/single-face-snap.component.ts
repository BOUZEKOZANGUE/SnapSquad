import { Component} from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  

   faceSnap!:FaceSnap
   

  buttonText! : string;
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

   ngOnInit(): void {
    this.buttonText = "💗";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
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
  

}
