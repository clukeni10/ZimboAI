import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// Interface para garantir que não faltam variáveis
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  // No Vite, usamos import.meta.env.VITE_NOME_DA_VARIAVEL
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Inicializa o Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Inicializa e exporta o Banco de Dados
export const db: Firestore = getFirestore(app);