<script>
	import WIP from "$components/helpers/WIP.svelte";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Figure from "$components/figure/Figure.svelte";
	import { scaleLinear } from 'd3-scale';

	let value;
	let age = '24';
    let sleepDuration = '7';

	// Create a color scale
	let colorScale = scaleLinear()
    .domain([0, 4])  // Example domain, adjust based on your needs
    .range(["blue", "red", "green", "orange", "purple"]);  // Example range from blue to red

	let backgroundColor = colorScale(0);  // Default background color

	// Update the background color reactively
	$: backgroundColor = colorScale(value);

</script>

<WIP />
	<section id="background">
		<Figure --aspect-ratio="1.5">
			<!-- svelte-ignore a11y-structure -->
			<svg style="background: {backgroundColor};" />
			<figcaption slot="figcaption">Step {value}</figcaption>
		</Figure>
	</section>
	<section  id="foreground">		
		<Scrolly bind:value>
			{#each [0, 1, 2, 3, 4] as text, i}
				{@const active = value === i}
				<div class="step" class:active>
					<p>Textbox {text}</p>
					{#if value === 1}
					<form class="form-container">
						<div class="input-group">
							<label for="age">Age:</label>
							<input type="number" id="age" bind:value={age} placeholder="42" min="5" max="95" step="1" />
						</div>
					
						<div class="input-group">
							<label for="sleep-duration">Sleep Duration (hours):</label>
							<input type="number" id="sleep-duration"  bind:value={sleepDuration} placeholder="7" min="4" max="13" step="0.5" />
						</div>
					</form>
					<p>Your age: {age}. Your sleep duration: {sleepDuration} hours</p>
					{/if}
				</div>
				
			{/each}
		</Scrolly>
	</section>


<!-- <Footer /> -->

<style>
	#background {
		position: sticky;
		/* 		top: 0em; */
		z-index: -1; /* behind the foreground content */
		max-width: 54rem;
		padding: 16px;
		margin: 0 auto;	
  		top: 50%;
  		left: 50%;
  		transform: translate(-50%, -50%);
	}

	#foreground {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
	}

	:global(#foreground section) {
		margin: 32px auto;
		padding-top: 32px;
	}

	:global(#foreground h2 span) {
		background: var(--color-mark);
		padding: 0 8px;
	}

	.step {
		height: 16rem;
		background: var(--color-gray-100);
		text-align: center;
		margin-bottom: calc(100vh - 16rem);
		padding: 1rem;
	}

	.step p {
		padding: 1rem;
	}

    .form-container {
        display: flex;
        align-items: center; /* Aligns items vertically in the center */
        gap: 20px; /* Provides space between groups */
        flex-wrap: nowrap; /* Prevents wrapping of items to new lines */
    }
    .input-group {
        display: flex;
        gap: 10px; /* Space between label and input */
    }
    label {
        font-weight: bold;
    }
    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>