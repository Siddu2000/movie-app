
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
       
        apiKey: "AIzaSyBdRT9GamAoIHT_QrDKPx8IKM6eEVkc7iY",
        authDomain: "auth-development-c5d1a.firebaseapp.com",
        projectId: "auth-development-c5d1a",
        storageBucket: "auth-development-c5d1a.appspot.com",
        messagingSenderId: "47450436260",
        appId: "1:47450436260:web:39a02ad0990dded5cdac31",
      
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  
  export { auth };

