<nav>
	<ul class="nav-list">
		<li>
			<a href="/about">Who am I?</a>
		</li>
		<li>
			<a href="/work">Work</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
	</ul>
</nav>

<style>
	.nav-list {
		@apply flex justify-center items-center;

		a {
			@apply hover:bg-primary-hover-token px-4 py-2 rounded-token;
		}
	}
</style>
