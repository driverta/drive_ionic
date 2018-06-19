import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the LevelsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Levels {

	_levels = [
	    { level: 1, totalPoints: 0, levelPoints: 100},
	    { level: 2, totalPoints: 100, levelPoints: 200},
	    { level: 3, totalPoints: 300, levelPoints: 300},
	    { level: 4, totalPoints: 600, levelPoints: 400},
	    { level: 5, totalPoints: 1000, levelPoints: 500},
	    { level: 6, totalPoints: 1500, levelPoints: 600},
	    { level: 7, totalPoints: 2100, levelPoints: 700},
	    { level: 8, totalPoints: 2800, levelPoints: 800},
	    { level: 9, totalPoints: 3600, levelPoints: 900},
	    { level: 10, totalPoints: 4500, levelPoints: 1000},
	    { level: 11, totalPoints: 5500, levelPoints: 1100},
	    { level: 12, totalPoints: 6600, levelPoints: 1200},
	    { level: 13, totalPoints: 7800, levelPoints: 1300},
	    { level: 14, totalPoints: 9100, levelPoints: 1400},
	    { level: 15, totalPoints: 10500, levelPoints: 1500},
	    { level: 16, totalPoints: 12000, levelPoints: 1600},
	    { level: 17, totalPoints: 13600, levelPoints: 1700},
	    { level: 18, totalPoints: 15300, levelPoints: 1800},
	    { level: 19, totalPoints: 17100, levelPoints: 1900},
	    { level: 20, totalPoints: 19000, levelPoints: 2000},
	    { level: 21, totalPoints: 21000, levelPoints: 4000},
	    { level: 22, totalPoints: 25000, levelPoints: 8000},
	    { level: 23, totalPoints: 33000, levelPoints: 16000},
	    { level: 24, totalPoints: 49000, levelPoints: 32000},
	    { level: 25, totalPoints: 81000, levelPoints: 64000},
	    { level: 26, totalPoints: 145000, levelPoints: 128000},
	    { level: 27, totalPoints: 273000, levelPoints: 256000},
	    { level: 28, totalPoints: 529000, levelPoints: 512000},
	    { level: 29, totalPoints: 1041000, levelPoints: 1024000},
	    { level: 30, totalPoints: 2065000, levelPoints: 2048000},
	    { level: 31, totalPoints: 4113000, levelPoints: 4096000},
	    { level: 32, totalPoints: 8209000, levelPoints: 8192000},
	    { level: 33, totalPoints: 24593000, levelPoints: 16384000},
	    { level: 34, totalPoints: 40977000, levelPoints: 32768000},
	    { level: 35, totalPoints: 73745000, levelPoints: 65536000},
	    { level: 36, totalPoints: 139281000, levelPoints: 131072000},
	    { level: 37, totalPoints: 270353000, levelPoints: 262144000},
	    { level: 38, totalPoints: 532497000, levelPoints: 524288000},
	    { level: 39, totalPoints: 1056785000, levelPoints: 1048576000},
	    { level: 40, totalPoints: 2105361000, levelPoints: 2097152000},
	  ];

  constructor(public http: HttpClient) {
  
  }

}
