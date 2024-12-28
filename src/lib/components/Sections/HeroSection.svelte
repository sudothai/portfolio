<script lang="ts">
	import { goto } from "$app/navigation";
    import { Button } from "$components";

    function onclick() {
        goto("/#contact-form");
    }
</script>

<section class="">
    <h3 class="mt-12 text-3xl"><span class="underline">Hello</span>! I'm Thai</h3>
    <h1 class="mt-8 text-7xl lg:text-8xl font-extrabold w-10/12">I help organizations deliver software faster with modern</h1>
    <h1 class="text-7xl lg:text-8xl font-extrabold text-gray-500">DevOps.</h1>
    <Button {onclick}>Let's talk</Button>
</section>