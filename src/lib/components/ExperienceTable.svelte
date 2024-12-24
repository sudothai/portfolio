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
            company: "BoxBoat, Acquired by IBM",
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

<section class="default-margin work-experience mt-l">
    <ul class="work-experience-list">
        {#each workExperience as job}
            <li class="work-item">
                <article>
                    <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
                    <div class="company-and-date">
                        <p>{job.company}</p>
                        <p class="dark-grey">
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
    <h2>Past Work <br /> Experience</h2>
</section>