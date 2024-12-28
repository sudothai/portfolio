<script lang="ts">
    import { Button, SectionHeadline, ExperienceTable }  from "$components";
    import image from "$assets/about-me.jpeg";
    import { goto } from "$app/navigation";
    
    function onclick() {
        goto("/#contact-form");
    }
</script>

<section class="mt-12 text-3xl">
    <div class="text-6xl xs:text-4xl font-bold"><span class="underline text-6xl xs:text-4xl font-bold">About</span> Me</div>
    <div class="mt-12 grid gap-8 xl:grid-cols-2">
        <img src={image} class="rounded-xl" alt="" />
        <div class="text-3xl  xs:text-lg">
            <p class="">
              I’m Thai, a CKAD/CKA DevOps Engineer with 7+ years of experience automating software for Fortune 500 companies. I specialize in architecting Kubernetes clusters, refining CI/CD pipelines, and implementing observability and security at scale—and I love guiding teams through modern DevOps best practices.
            </p>
            <p class="mt-8">
              I have also developed training labs and hands-on workshops covering tools like Ansible, Terraform, Istio, and Argo CD to help organizations level up their DevOps game. Let’s streamline your processes, accelerate delivery, and unlock your organization’s full potential. 
            </p>
            <Button className="mt-m" {onclick}>Tell me about your project</Button>
        </div>
    </div>
    <ExperienceTable />
</section>