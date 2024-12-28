<script lang="ts">
    import type { Snippet } from "svelte";

    interface ButtonProps {
        children: Snippet;
        onclick: ((e: MouseEvent) => void) | (() => void);
        className?: string;
    }

    let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className} mt-8 py-4 px-10 rounded-xl text-3xl xs:text-xl bg-black text-white`} {...props}>
    {@render children()}
</button>