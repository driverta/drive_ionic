import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, AlertController, Alert, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import firebase from 'firebase';
import { Error } from '@firebase/auth-types';
import { User, AuthProvider } from '../../providers/providers';
import { MainPage } from '../pages';
import { ProvidersUserProvider } from '../../providers/providers-user/providers-user';
import { UserModel } from '../../models/users';
import { APIUser } from '../../models/APIUser';
import { ExerciseProvider } from '../../providers/exercise/exercise';
import { Exercise } from '../../models/Exercise';
import { MuscleGroup } from '../../models/MuscleGroupModel';
import {finalize} from 'rxjs/operators';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  loop = 0;
  show = false;
  confirmPassword = "";
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: '',
    email: '',
    password: ''
  };

  private buttonPressed: Boolean = false;

  totalGains = [];

  users: UserModel[];
  private user: UserModel;

  // Our translated text strings
  private signupErrorString: string;

  private mg: MuscleGroup;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public alertCtrl: AlertController,
    private storage: Storage,
    private userService: ProvidersUserProvider,
    private exerciseService: ExerciseProvider,
    private authProvider: AuthProvider,
    private readonly loadingCtrl: LoadingController) {
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })

    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        this.saveLogin()
        this.addExercises()
      }
    });
  }

  initiateSignUp() {


    this.buttonPressed = true;

    if (this.account.name == '') {
      let emptyUsername = this.alertCtrl.create({
        title: "Error",
        message: "Please enter a username",
        buttons: ['Ok']
      });
      emptyUsername.present();
      this.buttonPressed = false;
    }
    else if (this.account.email == '') {
      let emptyEmail = this.alertCtrl.create({
        title: "Error",
        message: "Please enter your email",
        buttons: ['Ok']
      });

      emptyEmail.present();
      this.buttonPressed = false;
    }
    else if (this.account.password == '') {
      let emptyPassword = this.alertCtrl.create({
        title: "Error",
        message: "Please enter your password",
        buttons: ['Ok']
      });
      emptyPassword.present();
      this.buttonPressed = false;
    }
    else if (this.confirmPassword == '') {
      let emptyPassword = this.alertCtrl.create({
        title: "Error",
        message: "Please confirm your password",
        buttons: ['Ok']
      });
      emptyPassword.present();
      this.buttonPressed = false;
    } else {

      this.userService.getOneUser(this.account.name).subscribe(data => {
        if (data.username === "alreadyexists") {
          this.signUp();
        }
        else {
          this.repeatUsername();
          this.show = false;
        }
      });
    }
  }

  saveLogin() {
    this.storage.set("stay", "logged")
    this.storage.set("email", this.account.email);
  }

  signUp() {

    this.show = true;
    if (this.account.password != this.confirmPassword) {
      this.badPassword()
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password)
      .then(value => {
        let loading = this.loadingCtrl.create({
          spinner: 'bubbles',
          content: 'Logging in ...'
        });
    
        loading.present();

        this.user = new UserModel();
        this.user.username = this.account.name;
        this.user.email = this.account.email;

        let apiUser = new APIUser;
        apiUser.email = this.account.email
        apiUser.password = this.account.password
        apiUser.username = this.account.email.split('@')[0]
        this.authProvider
          .login(apiUser)
          .pipe(finalize(() => loading.dismiss()))
          .subscribe(
            () => {
            },
            err => this.handleError(err));

      }).catch((error: Error) => {
        this.presentFirebaseError(error)
      });
  }

  addExercises() {
    this.userService.createUser(this.user).subscribe(response => {
      this.userService.setUser(response)
      var bench = new Exercise;
      bench.exerciseName = "Bench Press";
      bench.variation = "Barbell";
      this.mg = { id: 1, muscleGroupName: "Chest" }
      bench.MuscleGroup = this.mg;
      this.exerciseService.createExercise
        (this.userService.getUser().id, bench).subscribe(data => {
          //console.log(data)
        })

      var squat = new Exercise;
      squat.exerciseName = "Squat";
      squat.variation = "Barbell";
      this.mg = { id: 3, muscleGroupName: "Legs" }
      squat.MuscleGroup = this.mg;
      this.exerciseService.createExercise(this.userService.getUser().id, squat).subscribe(data => {
        //console.log(data)
      })

      var deadlift = new Exercise;
      deadlift.exerciseName = "Deadlift";
      deadlift.variation = "Barbell";
      this.mg = { id: 2, muscleGroupName: "Back" }
      deadlift.MuscleGroup = this.mg;
      this.exerciseService.createExercise(this.userService.getUser().id, deadlift).subscribe(data => {
        //console.log(data)
      })
      this.navCtrl.push(MainPage);
    });
  }

  handleError(error: any) {
    alert(error)
    let message: string;
    if (error.status && error.status === 401) {
      message = 'Login failed';
    }
    else {
      message = `Unexpected error: ${error.statusText}`;
    }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

  presentFirebaseError(error: Error) {
    this.buttonPressed = false;
    let firebaseError: Alert = this.alertCtrl.create({
      title: "Error",
      message: "Something went wrong!",
      buttons: ['Ok']
    });
    if (error.code === "auth/email-already-in-use") {
      firebaseError.setMessage("There is an existing account associated with this email")
    }
    else if (error.code === "auth/invalid-email") {
      firebaseError.setMessage("Please enter a valid email")
    }
    else if (error.code === "auth/weak-password") {
      firebaseError.setMessage("Password must be at least 6 characters")
    }
    firebaseError.present();
  }

  badPassword() {
    this.buttonPressed = false;
    let alert = this.alertCtrl.create({
      title: "Error",
      message: "Passwords do not match!",
      buttons: ['Ok']
    });
    alert.present();

  }

  repeatUsername() {
    this.buttonPressed = false;
    let alert = this.alertCtrl.create({
      title: "Error",
      message: "Someone is already using this username",
      buttons: ['Ok']
    });
    alert.present();
  }


  signIn() {
    this.navCtrl.pop();
  }

  termsOfUse() {
    let alert = this.alertCtrl.create({
      title: "Terms of Use",
      message: "1. TERMS OF USE \n By downloading, browsing, accessing or using this Drive mobile application, you agree to be bound by these Terms and Conditions of Use. We reserve the right to amend these terms and conditions at any time. If you disagree with any of these Terms and Conditions of Use, you must immediately discontinue your access to the Mobile Application and your use of the services offered on the Mobile Application. Continued use of the Mobile Application will constitute acceptance of these Terms and Conditions of Use, as may be amended from time to time. \n 2. DEFINITIONS In these Terms and Conditions of Use, the following capitalised terms shall have the following meanings, except where the context otherwise requires: \"Account\" means an account created by a User on the Mobile Application as part of Registration. \"Merchant\" refers to any entity whose products or Samples can be purchased and/or redeemed (as the case may be) via the Mobile Application. \"Privacy Policy\" means the privacy policy set out in Clause 14 of these Terms and Conditions of Use. \"Redeem\" means to redeem a Merchant’s products or Samples on these Terms and Conditions of Use and \"Redemption\" means the act of redeeming such products or Samples. \"Register\" means to create an Account on the Mobile Application and \"Registration\" means the act of creating such an Account. \"Samples\" means samples of Merchant’s products and/or Merchant’s services, including without limitation, any vouchers for the redemption of such services, and \"Sample\" means any one of them. \"Services\" means all the services provided by Singapore Post Limited via the Mobile Application to Users, and \"Service\" means any one of them, \"Users\" means users of the Mobile Application, including you and \"User\" means any one of them. 3. GENERAL ISSUES ABOUT THE MOBILE APPLICATION AND THE SERVICES 3.1 Applicability of terms and conditions: The use of any Services and/or the Mobile Application and the making of any Redemptions are subject to these Terms and Conditions of Use. 3.2 Location: The Mobile Application, the Services and any Redemptions are intended solely for use by Users who access the Mobile Application in Singapore. We make no representation that the Services (or any goods or services) are available or otherwise suitable for use outside of Singapore. Notwithstanding the above, if you access the Mobile Application, use the Services or make any Redemptions from locations outside Singapore, you do so on your own initiative and are responsible for the consequences and for compliance with all applicable laws. 3.3 Scope: The Mobile Application, the Services and any Redemptions are for your non-commercial, personal use only and must not be used for business purposes. 3.4 Prevention on use: We reserve the right to prevent you using the Mobile Application and the Service (or any part of them) and to prevent you from making any Redemptions. 3.4 Prevention on use: We reserve the right to prevent you using the Mobile Application and the Service (or any part of them) and to prevent you from making any Redemptions. 3.5 Equipment and Networks: The provision of the Services and the Mobile Application does not include the provision of a mobile telephone or handheld device or other necessary equipment to access the Mobile Application or the Services or make any Redemptions. To use the Mobile Application or Services or to make Redemptions, you will require Internet connectivity and appropriate telecommunication links. You acknowledge that the terms of agreement with your respective mobile network provider (\"Mobile Provider\") will continue to apply when using the Mobile Application. As a result, you may be charged by the Mobile Provider for access to network connection services for the duration of the connection while accessing the Mobile Application or any such third party charges as may arise. You accept responsibility for any such charges that arise. 3.6 Permission to use Mobile Application: If you are not the bill payer for the mobile telephone or handheld device being used to access the Mobile Application, you will be assumed to have received permission from the bill payer for using the Mobile Application. 3.7 License to Use Material: By submitting any text or images (including photographs) (“Material”) via the Application, you represent that you are the owner of the Material, or have proper authorization from the owner of the Material to use, reproduce and distribute it. You hereby grant us a worldwide, royalty-free, non-exclusive license to use the Material to promote any products or services. 4. REDEMPTIONS 4.1 Need for registration: You must Register to make a Redemption from the Mobile Application. 4.2 Application of these Terms and Conditions of Use: By making any Redemption, you acknowledge that the Redemption is subject to these Terms and Conditions of Use. 4.3 Redemption: Any attempted Redemption not consistent with these Terms and Conditions of Use may be disallowed or rendered void at our or the relevant Merchant’s discretion. 4.4 Responsibility for Redemptions of perishable products of Samples: Each Merchant shall be responsible to ensure that any of its products or Samples for Redemption that are perishable has not expired. 4.5 Restrictions: (a) Reproduction, sale, resale or trading of any products or Samples or Redeemed products is prohibited. (b) If any product or Sample is Redeemed for less than its face value, there is no entitlement to a credit, cash or Sample equal to the difference between the face value and the amount Redeemed. (c) Redemption of products or Samples is subject to availability of the relevant Merchants’ stocks. 4.6 SingPost Not Liable: For the avoidance of doubt, Singapore Post Limited shall not be liable for any losses or damages suffered by you resulting from a failure by the relevant Merchant to fulfil any Redemptions in accordance with Clause 4.4 or for a failure by us to deliver any products or Samples to you due to the unavailability of such products or Samples pursuant to Clause 4.5(c). 4.7 Lost/stolen Samples: Neither we nor any Merchant shall be responsible for lost or stolen Samples or products that have been Redeemed. 5. LOCATION ALERTS AND NOTIFICATIONS 5.1 You agree to receive pre-programmed notifications (“Location Alerts”) on the Mobile Application from Merchants if you have turned on locational services on your mobile telephone or other handheld devices (as the case may be). 6. YOUR OBLIGATIONS 6.1 Merchant terms: You agree to (and shall) abide by the terms and conditions of the relevant Merchant for which your Redemption relates to, as may be amended from time to time. 6.2 Accurate information: You warrant that all information provided on Registration and contained as part of your Account is true, complete and accurate and that you will promptly inform us of any changes to such information by updating the information in your Account. 6.3 Content on the Mobile Application and Service: It is your responsibility to ensure that any products, Samples or information available through the Mobile Application or the Services meet your specific requirements before making any Redemption. 6.4 Prohibitions in relation to usage of Services or Mobile Application: Without limitation, you undertake not to use or permit anyone else to use the Services or Mobile Application:- 6.4.1 to send or receive any material which is not civil or tasteful 6.4.2 to send or receive any material which is threatening, grossly offensive, of an indecent, obscene or menacing character, blasphemous or defamatory of any person, in contempt of court or in breach of confidence, copyright, rights of personality, publicity or privacy or any other third party rights; 6.4.3 to send or receive any material for which you have not obtained all necessary licences and/or approvals (from us or third parties); or which constitutes or encourages conduct that would be considered a criminal offence, give rise to civil liability, or otherwise be contrary to the law of or infringe the rights of any third party in any country in the world; 6.4.4 to send or receive any material which is technically harmful (including computer viruses, logic bombs, Trojan horses, worms, harmful components, corrupted data or other malicious software or harmful data); 6.4.5 to cause annoyance, inconvenience or needless anxiety; 6.4.6 to intercept or attempt to intercept any communications transmitted by way of a telecommunications system; 6.4.7 for a purpose other than which we have designed them or intended them to be used; 6.4.8 for any fraudulent purpose; 6.4.9 other than in conformance with accepted Internet practices and practices of any connected networks; 6.4.10 in any way which is calculated to incite hatred against any ethnic, religious or any other minority or is otherwise calculated to adversely affect any individual, group or entity; or 6.4.11 in such a way as to, or commit any act that would or does, impose an unreasonable or disproportionately large load on our infrastructure. 6.5 Prohibitions in relation to usage of Services, Mobile Application: Without limitation, you further undertake not to or permit anyone else to:- 6.5.1 resell any products or Samples; 6.5.2 furnish false data including false names, addresses and contact details and fraudulently use credit/debit card numbers; 6.5.3 attempt to circumvent our security or network including to access data not intended for you, log into a server or account you are not expressly authorised to access, or probe the security of other networks (such as running a port scan); 6.5.4 execute any form of network monitoring which will intercept data not intended for you; 6.5.5 enter into fraudulent interactions or transactions with us or a Merchant (including interacting or transacting purportedly on behalf of a third party where you have no authority to bind that third party or you are pretending to be a third party); 6.5.6 extract data from or hack into the Mobile Application; 6.5.7 use the Services or Mobile Application in breach of these Terms and Conditions of Use; 6.5.8 engage in any unlawful activity in connection with the use of the Mobile Application or the Services; or 6.5.9 engage in any conduct which, in our exclusive reasonable opinion, restricts or inhibits any other customer from properly using or enjoying the Mobile Application or Services. 7. RULES ABOUT USE OF THE SERVICE AND THE MOBILE APPLICATION 7.1 We will use reasonable endeavours to correct any errors or omissions as soon as practicable after being notified of them. However, we do not guarantee that the Services or the Mobile Application will be free of faults, and we do not accept liability for any such faults, errors or omissions. In the event of any such error, fault or omission, you should report it by contacting us. 7.2 We do not warrant that your use of the Services or the Mobile Application will be uninterrupted and we do not warrant that any information (or messages) transmitted via the Services or the Mobile Application will be transmitted accurately, reliably, in a timely manner or at all. Notwithstanding that we will try to allow uninterrupted access to the Services and the Mobile Application, access to the Services and the Mobile Application may be suspended, restricted or terminated at any time. 7.3 We do not give any warranty that the Services and the Mobile Application are free from viruses or anything else which may have a harmful effect on any technology. 7.4 We reserve the right to change, modify, substitute, suspend or remove without notice any information or Services on the Mobile Application from time to time. Your access to the Mobile Application and/or the Services may also be occasionally restricted to allow for repairs, maintenance or the introduction of new facilities or services. We will attempt to restore such access as soon as we reasonably can. For the avoidance of doubt, we reserve the right to withdraw any information or Services from the Mobile Application at any time. 7.5 We reserve the right to block access to and/or to edit or remove any material which in our reasonable opinion may give rise to a breach of these Terms and Conditions of Use. 8. SUSPENSION AND TERMINATION 8.1 If you use (or anyone other than you, with your permission uses) the Mobile Application, any Services in contravention of these Terms and Conditions of Use, we may suspend your use of the Services and/or Mobile Application. 8.2 If we suspend the Services or Mobile Application, we may refuse to restore the Services or Mobile Application for your use until we receive an assurance from you, in a form we deem acceptable, that there will be no further breach of the provisions of these Terms and Conditions of Use. 8.4 Without limitation to anything else in this Clause 8, we shall be entitled immediately or at any time (in whole or in part) to: (a) suspend the Services and/or Mobile Application; (b) suspend your use of the Services and/or Mobile Application; and/or (c) suspend the use of the Services and/or Mobile Application for persons we believe to be connected (in whatever manner) to you, if: 8.4.1 you commit any breach of these Terms and Conditions of Use; 8.4.2 we suspect, on reasonable grounds, that you have, might or will commit a breach of these Terms and Conditions of Use; or 8.4.3 we suspect, on reasonable grounds, that you may have committed or be committing any fraud against us or any person. 8.5 Our rights under this Clause 8 shall not prejudice any other right or remedy we may have in respect of any breach or any rights, obligations or liabilities accrued prior to termination. 9. DISCLAIMER AND EXCLUSION OF LIABILITY 9.1 The Mobile Application, the Services, the information on the Mobile Application and use of all related facilities are provided on an \"as is, as available\" basis without any warranties whether express or implied. 9.2 To the fullest extent permitted by applicable law, we disclaim all representations and warranties relating to the Mobile Application and its contents, including in relation to any inaccuracies or omissions in the Mobile Application, warranties of merchantability, quality, fitness for a particular purpose, accuracy, availability, non-infringement or implied warranties from course of dealing or usage of trade. 9.3 We do not warrant that the Mobile Application will always be accessible, uninterrupted, timely, secure, error free or free from computer virus or other invasive or damaging code or that the Mobile Application will not be affected by any acts of God or other force majeure events, including inability to obtain or shortage of necessary materials, equipment facilities, power or telecommunications, lack of telecommunications equipment or facilities and failure of information technology or telecommunications equipment or facilities. 9.4 While we may use reasonable efforts to include accurate and up-to-date information on the Mobile Application, we make no warranties or representations as to its accuracy, timeliness or completeness. 9.5 We shall not be liable for any acts or omissions of any third parties howsoever caused, and for any direct, indirect, incidental, special, consequential or punitive damages, howsoever caused, resulting from or in connection with the mobile application and the services offered in the mobile application, your access to, use of or inability to use the mobile application or the services offered in the mobile application, reliance on or downloading from the mobile application and/or services, or any delays, inaccuracies in the information or in its transmission including but not limited to damages for loss of business or profits, use, data or other intangible, even if we have been advised of the possibility of such damages. 9.6 We shall not be liable in contract, tort (including negligence or breach of statutory duty) or otherwise howsoever and whatever the cause thereof, for any indirect, consequential, collateral, special or incidental loss or damage suffered or incurred by you in connection with the Mobile Application and these Terms and Conditions of Use.",
      buttons: ['Ok']
    });
    alert.present();
  }

}
