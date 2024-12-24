<script lang="ts">
    import type { Snippet } from "svelte";

    interface ButtonProps {
        children: Snippet,
        onclick: Function;
    }

    let { children }: ButtonProps = $props();
</script>

<button>
    {@render children()}
</button>