<script lang="ts">
    import { Button } from "$components";

    let contactName = $state("");
    let contactMail = $state("");
    let informationAboutProject = $state("");
    let isFormInvalid = $state(false);
    let isEmailSent = $state(false);
    let showErrorMessage = $state(false);
    let isLoading = $state(false);

    $inspect(isEmailSent);

    async function onSubmit(event: Event) {
        event.preventDefault();

        if (contactMail && contactName && informationAboutProject) {
            isLoading = true;
            const response = await fetch("/api/send-mail", {
                method: "POST",
                body: JSON.stringify({
                    contactName,
                    contactMail,
                    informationAboutProject,
                }),
                headers: { "Content-Type": "application/json" },
            });
            isLoading = false;
            if (response.ok) {
                isEmailSent = true;
            } else {
                showErrorMessage = true;
            }
        } else {
            isFormInvalid = true;
        }
    };

    $effect(() => {
        if (contactName || contactMail || informationAboutProject) {
            isFormInvalid = false;
        }
    });
</script>

<section class="mt-12">
    <h1 class="text-6xl xs:text-4xl font-bold mb-8"><span class="underline text-6xl xs:text-4xl font-bold">Let</span>'s talk</h1>
    <div class="text-2xl grid xl:grid-cols-2 gap-8">
        {#if isEmailSent}
            <div class="">
                <h3 class="text-2xl">
                    Thank you for getting in contact with me.<br /> I'll usually reply within 48 hours.
                </h3>
            </div>
        {:else if isLoading}
            <div class="">
                <div class=""></div>
                <h3 class="text-2xl">Sending off the contact form.</h3>
            </div>
        {:else if showErrorMessage}
            <h3 class="text-2xl">We seem to have trouble with our server at the moment.<br />Please send me an email to <a class="link" href="mailto:thai@techrealm.io">thai@techrealm.io</a></h3>
        {:else}
            <form action="" class="xs:order-2 md:order-2 lg:order-1" id="contact-form">
                <input type="text" class="block w-full mb-4 p-4 bg-[#F6F6F6] rounded-xl xs:text-lg" class:input-error={isFormInvalid && !Boolean(contactName.length)} placeholder="Your Name" bind:value={contactName} />
                <input type="text" class="block w-full mb-4 p-4 bg-[#F6F6F6] rounded-xl xs:text-lg" class:input-error={isFormInvalid && !Boolean(contactMail.length)} placeholder="Your Email" bind:value={contactMail} />
                <textarea name="" id="" placeholder="How can we help?" class="block w-full px-4 pt-4 pb-16 bg-[#F6F6F6] rounded-xl xs:text-lg" class:input-error={isFormInvalid && !Boolean(informationAboutProject.length)} bind:value={informationAboutProject}></textarea>
                <Button onclick={onSubmit}>Submit</Button>
            </form>
        {/if}
        <div class="form-text xs:order-1 md:order-1 lg:order-2">
            <h3 class="font-bold mb-4 text-3xl xs:text-xl">
                Talk to me about your project
            </h3>
            <p class="text-3xl xs:text-lg">
                I’m always excited to learn about fresh, innovative ideas! Whether you’re just starting to brainstorm or already have a detailed plan, I’m here to help make your vision a reality. Drop me a message with some details about your project, and let’s chat about how we can collaborate. I look forward to connecting and exploring the possibilities together. Talk soon!
            </p>
        </div>
    </div>
    <!-- <div class="spinner"></div> -->
</section>