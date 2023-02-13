import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyALJIztMtcb7y9p_kPTrmivE_s3A1j0xNw",
	authDomain: "personal-portfolio-2023-2a13d.firebaseapp.com",
	projectId: "personal-portfolio-2023-2a13d",
	storageBucket: "personal-portfolio-2023-2a13d.appspot.com",
	messagingSenderId: "693833308475",
	appId: "1:693833308475:web:54b2b56b0e4488e95f7f1e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/**
 *
 * @param data
 * Contact Form Data
 */
export const submitFormToDb = async (data) => {
	try {
		const docRef = await addDoc(collection(db, "form-submissions"), {
			...data,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};
