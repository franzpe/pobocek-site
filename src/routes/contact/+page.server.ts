import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

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

		return { success: true };
	}
} satisfies Actions;
