<script lang="ts">
    import { Button, SectionHeadline, ExperienceTable }  from "$components";
    import image from "$assets/about-me.jpeg";
    import { goto } from "$app/navigation";
    
    function onclick() {
        goto("/#contact-form");
    }
</script>

<section class="about-me mt-l">
    <SectionHeadline sectionName={"about-me"}>About Me</SectionHeadline>
    <div class="mt-m content-container default-margin">
        <img src={image} class="image" alt="" />
        <div class="text">
            <p>
                Hey, I’m Thai, a Certified CKAD/CKA DevOps Engineer with nearly 7 years of experience designing, automating, and managing software deployments. Over the years, I’ve tackled real-world challenges—everything from standing up Kubernetes clusters and configuring CI/CD pipelines to implementing observability and security best practices at scale for Fortune 500 companies.
              </p>
              <p>
                My passion doesn’t stop at technology; I love guiding teams and individuals through the intricacies of modern DevOps. I’ve developed training labs and hands-on workshops covering everything from Ansible and Terraform to Istio and Argo CD, helping countless engineers and organizations level up their skills.
              </p>
              <p>
                  Now, I’m here to help you streamline processes and fast-track your journey to a more efficient, reliable, and secure DevOps ecosystem. Whether you need to optimize your CI/CD pipeline, improve infrastructure as code, or enhance platform resilience, let’s collaborate to make your vision a reality. I look forward to partnering with you and unlocking the full potential of DevOps for your organization!
              </p>
              <Button className="mt-m" {onclick}>Tell me about your project</Button>
        </div>
    </div>
    <ExperienceTable />
</section>

<style>
  .content-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .image {
    width: 42%;
    border-radius: 20px;
    object-fit: cover;
  }

  .text {
    width: 55%;
    text-align: left;
  }
</style>