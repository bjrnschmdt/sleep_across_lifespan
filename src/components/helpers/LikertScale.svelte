<script>
    import { RadioGroup, Label } from "bits-ui";
    export let question = "";
    export let options = [];

    let selectedValue; // this will automatically bind to RadioGroup value
</script>

<style lang="postcss">
    /* Additional styling if necessary */
    input {
  padding: 0.4rem;
  margin:  0 0.4rem;
}
</style>

<!-- <div>
    <p>{question}</p>
    <RadioGroup.Root class="flex flex-col gap-4 text-sm font-medium" bind:value={selectedValue}>
        {#each options as option}
            <div class="group flex select-none items-center items-center text-foreground transition-all">
                <RadioGroup.Item
                    id={option.id}
                    value={option.value}
                    class="size-5 shrink-0 cursor-default rounded-full border border-border-input bg-background transition-all duration-100 ease-in-out hover:border-dark-40 data-[state=checked]:border-6 data-[state=checked]:border-foreground"
                />
                <Label.Root for={option.id} class="pl-3">{option.label}</Label.Root>
            </div>
        {/each}
    </RadioGroup.Root>
    <p>Selected Value: {selectedValue}</p>
</div> -->

<fieldset>
    <legend>{question}</legend>
    <div>
        {#each options as option}
            <input type="radio" id={option.id} name="likert" value={option.value} bind:group={selectedValue} />
            <label for={option.id}>{option.label}</label>
        {/each}

    </div>
    <p>Selected Value: {selectedValue}</p>
</fieldset>