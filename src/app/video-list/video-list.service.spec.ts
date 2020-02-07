import { TestBed } from '@angular/core/testing';

import { VideoListService } from './video-list.service';

describe('VideoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoListService = TestBed.get(VideoListService);
    expect(service).toBeTruthy();
  });
});
