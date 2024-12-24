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

<style>
    .work-experience {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .work-experience-list {
        width: 50%;
    }

    .headline {
        text-align: right;
    }

    .work-item {
        border-bottom: 1px solid #f0eded;
        padding-bottom: 12px;
    }

    .work-item:not(:first-of-type) {
        padding-top: 16px;
    }

    .work-item p {
        margin-bottom: 0;
    }

    .company-and-date {
        display: flex;
        justify-content: space-between;
    }   
</style>