import { LOOPS_KEY } from '$env/static/private';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		// Retrieve data from client form
		const formData = Object.fromEntries(await event.request.formData());
        if (!formData.email){
            return{
                response: "invalid email"
            }
        }


		// Loops API integration. For adding new contact.
		let loopsResponse;
		const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${LOOPS_KEY}`
			},
			body: JSON.stringify({
				email: formData.email
			})
		})
			.then((response) => response.json())
			.then((data) => {
				loopsResponse = data;
			});
		console.log(loopsResponse);

		//   If loops says the email is already there
		if (loopsResponse!.message == 'Email already on list.') {
			return {
				response: 'email already registered'
			};
		}
        // If loops says it's an invalid email.
        if (loopsResponse!.message == 'Invalid email address.') {
			return {
				response: 'invalid email'
			};
		}
		// If loops fails for some other reason
		if ((loopsResponse!.success = false)) {
			return {
				response: 'failure'
			};
		}

		// If nothing fails, then return a successful response.
		return {
			response: 'success'
		};
	}
} satisfies Actions;




// Not necessary now
function validateEdu(email: string){
    const eduRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu)$/i;
    return eduRegex.test(email)
}
// Validate email
function validateEmail(email: string){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
