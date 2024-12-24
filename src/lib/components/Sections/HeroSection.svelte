<script lang="ts">
	import { goto } from "$app/navigation";
    import { Button } from "$components";

    function onclick(index: number) {
        goto("/#contact-form");
    }
</script>

<section class="hero-section default-margin">
    <h3>Hello! I'm Thai</h3>
    <div class="underscore mb-m"></div>
    <h1>I help organizations write and ship code</h1>
    <h1 class="dark-grey">faster.</h1>
    <Button {onclick}>Let's talk</Button>
</section>

<style>
    .hero-section {
        padding-top: 60px;
    }
</style>