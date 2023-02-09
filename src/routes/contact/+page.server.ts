import { fail } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';
import type { Actions } from './$types';
import * as env from '$env/dynamic/private';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		// Spam field
		if (formData.get('email2')) {
			return fail(400, { err: 'Go away you freak' });
		}

		const data = {
			name: String(formData.get('name')),
			email: String(formData.get('email')),
			body: String(formData.get('body')),
			services: String(formData.get('services'))
		};

		if (!data.name || !data.email) {
			let errors: Record<string, string> = {};

			if (!data.name) {
				errors = { ...errors, name: 'Please fill in your name' };
			}

			if (!data.email) {
				errors = { ...errors, email: 'Please fill in your email or phone number' };
			}

			return fail(400, { errors, data });
		}

		try {
			sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

			await sgMail.send({
				from: import.meta.env.VITE_MAIL_FROM,
				to: import.meta.env.VITE_MAIL_TO,
				subject: `Inquiry of - ${data.services.slice(1).split(',').join(', ')}`,
				text: `Contact: ${data.email} \n ${data.body}`,
				html: `<strong>Contact: ${data.email}</strong> <br /><br /> ${data.body}`
			});
		} catch (err: any) {
			return fail(400, err);
		}

		return { success: true };
	}
} satisfies Actions;
