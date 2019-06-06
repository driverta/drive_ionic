import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { CardioHistory } from '../../models/CardioHistory';
import { LiftingHistory } from '../../models/LiftingHistory';
import { NavParams } from 'ionic-angular';
import { ProvidersUserProvider } from '../providers';

/*
  Generated class for the RecordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Records {

	_records = [];

	_bodyLiftRecords = [];

	_chart = [];

	_cardio = [];

	_setToZero = [
	  {min: 0, max: 5, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 5, max: 10, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 10, max: 15, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 15, max: 20, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 20, max: 25, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 25, max: 30, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 30, max: 35, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 35, max: 40, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 40, max: 45, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 45, max: 50, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 50, max: 55, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 55, max: 60, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 60, max: 65, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 65, max: 70, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 70, max: 75, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 75, max: 80, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 80, max: 85, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 85, max: 90, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 90, max: 95, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 95, max: 100, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 100, max: 105, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 105, max: 110, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 110, max: 115, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 115, max: 120, miles: 0, time: 0, mph: 0, records: 0},
	  {min: 120, max: 1000, miles: 0, time: 0, mph: 0, records: 0}
	]

	_cardioRecs = [
	  	{min: 0, max: 5, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 5, max: 10, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 10, max: 15, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 15, max: 20, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 20, max: 25, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 25, max: 30, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 30, max: 35, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 35, max: 40, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 40, max: 45, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 45, max: 50, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 50, max: 55, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 55, max: 60, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 60, max: 65, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 65, max: 70, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 70, max: 75, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 75, max: 80, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 80, max: 85, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 85, max: 90, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 90, max: 95, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 95, max: 100, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 100, max: 105, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 105, max: 110, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 110, max: 115, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 115, max: 120, miles: 0, time: 0, mph: 0, records: 0},
	  	{min: 120, max: 1000, miles: 0, time: 0, mph: 0, records: 0}

	]

  _cardioRecords = [];

  exercise: any;
  username: any;
  checkRec = false;
  tempRec = [];
  muscleGroup: any;
  cardioRecords = [];
  cardioHistory: CardioHistory[];
  liftingRecords = [];
  liftingHistory: LiftingHistory[];
  liftingBool = true;
  cardioBool = false;
  user: any;

  constructor(
	  public http: HttpClient,
  ) {
   
  }
}
