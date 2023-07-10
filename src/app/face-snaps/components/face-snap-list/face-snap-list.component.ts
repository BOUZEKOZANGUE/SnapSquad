import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, interval, takeUntil, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snaps.model';
import { FaceSnapsService } from 'src/app/core/services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})

export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;
    private destroy$!: Subject<boolean>;
  
    constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {

      this.faceSnaps$ = this.faceSnapsService.getAllFaceSnap();
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

