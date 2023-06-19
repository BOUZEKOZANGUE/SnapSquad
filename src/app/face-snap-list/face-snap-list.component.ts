import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
    private destroy$!: Subject<boolean>;
  
    constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {

    
      this.destroy$ = new Subject<boolean>();

      this.faceSnaps = this.faceSnapsService.faceSnaps;
      interval(1000).pipe(
        tap(console.log),
        takeUntil(this.destroy$)
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true)
  }
}
