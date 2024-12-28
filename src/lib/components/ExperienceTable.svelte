<script lang="ts">
    interface WorExperience {
        company: string;
        startDate: string;
        endDate?: string;
    }
    const workExperience: WorkExperience[]= [
        {
            jobTitle: "Senior DevSecOps Engineer",
            company: "Raft",
            startDate: "05-2024",
        },
        {
            jobTitle: "CNA Delivery Lead & DevOps Engineer",
            company: "IBM",
            startDate: "06-2022",
            endDate: "05-2024",
        },
        {
            jobTitle: "DevOps Engineer",
            company: "Sweetwater",
            startDate: "07-2021",
            endDate: "05-2022",
        },
        {
            jobTitle: "Web Platform Engineer",
            company: "Brotherhood Mutual Insurance Company",
            startDate: "05-2017",
            endDate: "06-2021",
        },
    ];
</script>

<section class="mt-12">
    <h2 class="text-6xl font-bold"><span class="underline text-6xl font-bold">Past</span> Work <br /> Experience</h2>
    <ul class="mt-12">
        {#each workExperience as job}
            <li class="">
                <article>
                    <h3 class="font-bold mt-6">{job.jobTitle}</h3>
                    <div class="grid sm:grid-cols-2 mt-2">
                        <p>{job.company}</p>
                        <p class="text-right">
                            {job.startDate}
                        {#if job.endDate}
                            / {job.endDate}
                        {:else}
                            / Present
                        {/if}
                        </p>
                    </div>
                </article>
            </li>
        {/each}
    </ul>
</section>