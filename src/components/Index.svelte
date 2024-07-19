<script>
	import WIP from "$components/helpers/WIP.svelte";
	import Scrolly from "$components/helpers/Scrolly.svelte";
	import Figure from "$components/figure/Figure.svelte";
	import { scaleLinear } from 'd3-scale';
	import LikertScale from '$components/helpers/LikertScale.svelte';
	import Range from "$components/helpers/Range.svelte";

// Define the options for the Likert scale
const options = [
	{ id: 1, label: "Strongly Disagree", value: 1 },
	{ id: 2, label: "Disagree", value: 2 },
	{ id: 3, label: "Neutral", value: 3 },
	{ id: 4, label: "Agree", value: 4 },
	{ id: 5, label: "Strongly Agree", value: 5 }
];

const question="How do you feel about this statement?";

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
	$: console.log('Component re-rendered due to props:', { question, options });

</script>

<WIP />
<section id="scroll">
	<div class="scroll__graphic">
		<Figure --aspect-ratio="1.5">
			<!-- svelte-ignore a11y-structure -->
			<svg style="background: {backgroundColor};" />
			<figcaption slot="figcaption">Step {value}</figcaption>
		</Figure>
	</div>
	<div  class="scroll__text">		
		<Scrolly bind:value>
			{#each [0, 1, 2, 3, 4] as text, i (i)}
				{@const active = value === i}
				<div class="step" class:active={value === i} key={i}>
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
					{#if value === 2}
					<LikertScale question={question} options={options} />
					{/if}
				</div>
				
			{/each}
		</Scrolly>
	</div>
</section>
	


<!-- <Footer /> -->

<style lang="postcss">
	#scroll {
		position: relative;
		width: 54rem;
		margin: 0 auto;	
	}

	.scroll__graphic {
		position: sticky;
		z-index: -1; /* behind the foreground content */
		padding: 16px;
  		top: 50%;
  		transform: translate(0, -50%);
	}

	.scroll__text {
		max-width: 40rem;
		padding: 16px;
		margin: 0 auto;
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