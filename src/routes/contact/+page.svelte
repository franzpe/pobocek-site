<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';

	let services = [
		{ id: 1, name: 'Website / App development', active: false },
		{ id: 2, name: 'Consultancy', active: false },
		{ id: 3, name: 'Blockchain related', active: false },
		{ id: 4, name: 'Other', active: false }
	];

	let form = { data: { name: '', email: '', body: '' }, errors: { name: '', email: '' }, isSendingMail: false };
	let email2 = '';
	let isSuccess = false;

	const handleClick = (idx: number) => (e: any) => {
		services[idx].active = !services[idx].active;
	};

	const handleSubmit = async (e: SubmitEvent) => {
		let errors: Record<keyof typeof form.errors, string> = { name: '', email: '' };

		if (email2) return;

		if (!form.data.name) {
			errors = { ...errors, name: 'Please fill in your name' };
		}

		if (!form.data.email) {
			errors = { ...errors, email: 'Please fill in your email or phone number' };
		}

		form.errors = errors;

		if (!form.data.name || !form.data.email) return;

		form.isSendingMail = true;

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAIL_SERVICE,
				import.meta.env.VITE_EMAIL_TEMPLATE,
				{
					...form.data,
					services: services
						.filter(s => s.active)
						.map(s => s.name)
						.join(', ')
				},
				import.meta.env.VITE_EMAIL_PUBLIC_KEY
			);

			isSuccess = true;
		} catch (err) {
			const t: ToastSettings = {
				message: 'Oops! Email service is currently down. Please conact me directly via email.'
			};
			toastStore.trigger(t);
		} finally {
			form.isSendingMail = false;
		}
	};
</script>

{#if !isSuccess}
	<div class="page-container flex-1">
		<h1 class="!leading-tight text-center">
			Love to hear from you,
			<br />
			get in touch
			<i class="fa-solid fa-hands-clapping md:text-6xl text-amber-400" />
		</h1>

		<div class="flex max-sm:flex-col max-sm:space-y-12 md:space-x-4 p-4 md:p-6">
			<section class="flex-1">
				<section class="space-y-4">
					<h3>Contact details</h3>
					<p><b>You can catch me anytime from 8am - 10pm CET.</b></p>
					<div class="space-y-4 !my-8">
						<div class="flex items-center space-x-4">
							<div>
								<i class="fa-solid fa-mail-bulk text-2xl" />
							</div>
							<a href="mailto:frank@pobocek.dev" class="unstyled align-bottom !font-normal">frank@pobocek.dev</a>
						</div>
						<div class="flex items-center space-x-4">
							<div>
								<i class="fa-solid fa-phone text-2xl" />
							</div>
							<a href="tel:+421907207902" class="unstyled align-bottom !font-normal">+421 907 207 902</a>
						</div>
						<div class="flex items-center space-x-4">
							<div>
								<i class="fa-solid fa-location-dot text-2xl" />
							</div>
							<span class="unstyled align-bottom !font-normal">Halenárska 18A, 917 01 Trnava, Slovakia</span>
						</div>
						<div class="flex items-center space-x-4">
							<div>
								<i class="fa-solid fa-building text-2xl" />
							</div>
							<span class="unstyled align-bottom !font-normal">
								Applance Solutions Ltd. <br />
								Garbiarska 51/53, 926 01 Sereď
								<br />
								SK2121057180 (VAT)
							</span>
						</div>
					</div>
					<div class="space-y-2">
						<strong>Socials</strong>
						<section class="flex gap-4">
							<a href="https://github.com/franzpe" target="_blank" rel="noreferrer" aria-label="Github">
								<i class="fa-brands fa-github text-2xl" />
							</a>
							<a
								href="https://linkedin.com/in/frantisek-pobocek-06819913b"
								target="_blank"
								rel="noreferrer"
								aria-label="Linkedin"
							>
								<i class="fa-brands fa-linkedin text-2xl" />
							</a>
							<a href="https://t.me/Franzpeee" target="_blank" rel="noreferrer" aria-label="Telegram">
								<i class="fa-brands fa-telegram text-2xl" />
							</a>
						</section>
					</div>
				</section>
			</section>

			<section class="flex-1">
				<form class="space-y-4" on:submit|preventDefault={handleSubmit}>
					<h3>Work with me</h3>
					<p><b>Tell me more about yourself and what you've got in mind.</b></p>
					<label class="input-label">
						<span>* Your name</span>
						<input
							type="text"
							id="name"
							name="name"
							class="input"
							placeholder="What should I call you?"
							bind:value={form.data.name}
						/>
						{#if form.errors.name} <span class="inline-block text-error-500">{form.errors.name}</span> {/if}
					</label>
					<label class="input-label">
						<span>* Contact email or phone</span>
						<input
							type="text"
							id="email"
							name="email"
							class="input"
							placeholder="How can I reach you?"
							bind:value={form.data.email}
						/>
						{#if form.errors.email} <span class="inline-block text-error-500">{form.errors.email}</span> {/if}
					</label>
					<label class="input-label">
						<span>Message</span>
						<textarea
							id="body"
							name="body"
							class="input"
							placeholder="What would you like to build?"
							rows="4"
							bind:value={form.data.body}
						/>
					</label>
					<div class="input-label">
						<strong>How can I help?</strong>
						<div class="flex justify-start flex-wrap gap-2" aria-multiselectable="true">
							{#each services as service, i (service.id)}
								<button
									type="button"
									class="chip !font-medium {service.active
										? 'variant-filled-secondary'
										: 'variant-ghost-secondary'}"
									on:click={handleClick(i)}
								>
									<span class="capitalize">{service.name}</span>
								</button>
							{/each}
						</div>
					</div>
					<label class="hidden">
						<span>email2</span>
						<input type="text" id="email2" name="email2" class="input" bind:value={email2} />
					</label>
					<button disabled={form.isSendingMail} class="btn variant-filled-primary btn-base !mt-8">
						Send message
					</button>
				</form>
			</section>
		</div>
	</div>
{:else}
	<h1 class="!leading-tight text-center mb-8">
		Take a cup of coffee,
		<br />
		and prepare for a ride
		<i class="fa-solid fa-hands-clapping md:text-6xl text-amber-400" />
	</h1>
	<h4 class="mb-4">Meanwhile check out some of my cool blogs</h4>
	<a href="/blog" class="btn variant-ghost-secondary">See recent blogs</a>
{/if}

<style></style>
