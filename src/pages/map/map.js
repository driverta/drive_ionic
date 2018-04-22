var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, LatLng } from '@ionic-native/google-maps';
import { IonicPage, NavController, Platform } from 'ionic-angular';
var MapPage = /** @class */ (function () {
    function MapPage(googleMaps, navCtrl, platform) {
        this.googleMaps = googleMaps;
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    MapPage.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        // make sure to create following structure in your view.html file
        // and add a height (for example 100%) to it, else the map won't be visible
        // <ion-content>
        //  <div #map id="map" style="height:100%;"></div>
        // </ion-content>
        // create a new map by passing HTMLElement
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        // listen to MAP_READY event
        // You must wait for this event to fire before adding something to the map or modifying it in anyway
        map.one(GoogleMapsEvent.MAP_READY).then(function () { return console.log('Map is ready!'); });
        // create LatLng object
        var ionic = new LatLng(43.0741904, -89.3809802);
        // create CameraPosition
        var position = {
            target: ionic,
            zoom: 18,
            tilt: 30
        };
        // move the map's camera to position
        map.moveCamera(position);
        // create new marker
        //  let markerOptions: MarkerOptions = {
        //    position: ionic,
        //    title: 'Ionic'
        //  };
        //
        //  const marker: Marker = map.addMarker(markerOptions)
        //    .then((marker: Marker) => {
        //       marker.showInfoWindow();
        //     });
        //  }
        //
        // initJSMaps(mapEle) {
        //   new google.maps.Map(mapEle, {
        //     center: { lat: 43.071584, lng: -89.380120 },
        //     zoom: 16
        //   });
        // }
        //
        // initNativeMaps(mapEle) {
        //   this.map = new GoogleMap(mapEle);
        //   mapEle.classList.add('show-map');
        //
        //   GoogleMap.isAvailable().then(() => {
        //     const position = new GoogleMapsLatLng(43.074395, -89.381056);
        //     this.map.setPosition(position);
        //   });
        // }
        //
        // ionViewDidLoad() {
        //   let mapEle = this.map.nativeElement;
        //
        //   if (!mapEle) {
        //     console.error('Unable to initialize map, no map element with #map view reference.');
        //     return;
        //   }
        //
        //   // Disable this switch if you'd like to only use JS maps, as the APIs
        //   // are slightly different between the two. However, this makes it easy
        //   // to use native maps while running in Cordova, and JS maps on the web.
        //   if (this.platform.is('cordova') === true) {
        //     this.initNativeMaps(mapEle);
        //   } else {
        //     this.initJSMaps(mapEle);
        //   }
        // }
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", Object)
    ], MapPage.prototype, "map", void 0);
    MapPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-map',
            templateUrl: 'map.html'
        }),
        __metadata("design:paramtypes", [GoogleMaps, NavController, Platform])
    ], MapPage);
    return MapPage;
}());
export { MapPage };
//# sourceMappingURL=map.js.map