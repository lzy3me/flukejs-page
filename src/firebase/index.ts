import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp, initializeApp } from "firebase/app";

export class Firebase {
  constructor(private app: FirebaseApp, private analytics: Analytics) {
    const firebaseConfig = {
      apiKey: "AIzaSyBi8fAltEejHuICflByvbfXJcdqi0nRryY",
      authDomain: "flukejs-com.firebaseapp.com",
      projectId: "flukejs-com",
      storageBucket: "flukejs-com.appspot.com",
      messagingSenderId: "1042552166174",
      appId: "1:1042552166174:web:29859eb677d20ee530db0f",
      measurementId: "G-WV3WST691F",
    };

    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }

  getFirebaseApp(): FirebaseApp {
    return this.app;
  }

  getAnalytics(): Analytics {
    return this.analytics;
  }
}