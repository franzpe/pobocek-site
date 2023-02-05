<script lang="ts">
	let chips = new Array(4).fill(false);
	$: chipStateClass = chips.map(c => (c ? 'variant-filled-secondary' : 'variant-ghost-secondary'));

	function handleClick(idx: number) {
		return function (e: any) {
			chips[idx] = !chips[idx];
		};
	}
</script>

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
						<a href="mailto:pobocekfrantisek@gmail.com" class="unstyled align-bottom !font-normal">
							pobocekfrantisek@gmail.com
						</a>
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
			<form class="space-y-4">
				<h3>Work with me</h3>
				<p><b>Tell me more about yourself and what you've got in mind.</b></p>
				<label class="input-label">
					<span>Your name</span>
					<input type="text" id="name" class="input" placeholder="What should i call you?" />
				</label>
				<label class="input-label">
					<span>Contact email or phone</span>
					<input type="text" id="name" class="input" placeholder="How can i reach you?" />
				</label>
				<label class="input-label">
					<span>Your name</span>
					<textarea id="name" class="input" placeholder="What would you like to build?" rows="4" />
				</label>
				<div class="input-label">
					<strong>How can I help?</strong>
					<div class="flex justify-start flex-wrap gap-2" aria-multiselectable="true">
						<button class="chip !font-medium {chipStateClass[0]}" on:click={handleClick(0)}>
							<span class="capitalize">Website / App development</span>
						</button>
						<button class="chip !font-medium {chipStateClass[1]}" on:click={handleClick(1)}>
							<span class="capitalize">Consultancy</span>
						</button>
						<button class="chip !font-medium {chipStateClass[2]}" on:click={handleClick(2)}>
							<span class="capitalize">Blockchain related</span>
						</button>
						<button class="chip !font-medium {chipStateClass[3]}" on:click={handleClick(3)}>
							<span class="capitalize">Other</span>
						</button>
					</div>
				</div>
				<button class="btn variant-filled-primary btn-base !mt-8">Send message</button>
			</form>
		</section>
	</div>
</div>

<style></style>
