import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADER;
  }

  getFeaturedLeader(): Leader {
    return LEADER.filter((lead) => lead.featured)[0];
  }
}
