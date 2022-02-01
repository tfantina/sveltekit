<script>
import { fade } from 'svelte/transition';
import Skills from './Skills.svelte';
import Now from './Now.svelte';
import Uses from './Uses.svelte';


let subset = ""

</script>
<div class="container about-section mt-5">
	<div class="row">
		<div class="col-md-6 col-12 order-2 order-md-1">
			<div class="row">
				<h2 class="mb-3">About</h2>
				<div class="about">
					<div class="profile-pic__mobile--container">
						<img src="images/profile_pic.jpg" alt="This is a photo of me it shows on mobile devices" class="profile-pic__mobile">
					</div>
					<p>
						I'm a developer and designer, currently located in Ontario. I'm generally stoked to go
						jogging, climbing, take photos, or chill with my sexy wife and cute daughter.
					</p>
					<p>
						I'm under contract full-time with an agency Salt Lake City called Obejctive. I work on
						projects big and small, everything from single page marketing sites built with NextJS to
						massive B2B platforms built with Elixir.
					</p>
					<p>
						I'm not accepting new client work, generally, but I'd love to hear about and help out (if
						I can) any intresting projects you are working on. Especially if those projects have to do
						with animal rights, the environment or are overly artistic in nature.
					</p>
					<p>Any way I can stick it to the man, man.</p>
					<p>
						For more on my specific skills, what I use, or what I'm doing right meow click the buttons
						below:
					</p>
				</div>
			</div>
			<div class="row d-flex about-buttons">
				<div class="col-8 d-flex flex-column">
						<button class="btn btn-secondary" on:click={() => subset = "skills"}>Skills</button>
						<button class="btn btn-secondary" on:click={() => subset = "now"}>Now</button>
						<button class="btn btn-secondary" on:click={() => subset = "uses"}>Uses</button>
				</div>
			</div>
		</div>
		<div class="col-md-6 col-12 order-1 order-md-2">
			<div class="row">
				<img src="images/profile_pic.jpg" alt="This is a photo of me" class="profile-pic">
			</div>
		</div>
	</div>
	<div class="row" id="item-expander">
		{#if subset === "skills"}
			<Skills />
		{:else if subset === "now"}
			<Now />
		{:else if subset === "uses"}
			<Uses />
		{:else}

		{/if}

	</div>
</div>
