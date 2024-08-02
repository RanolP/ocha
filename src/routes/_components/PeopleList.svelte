<script lang="ts">
    import data from '@/data.gen.json'
</script>

<div flex="~ row wrap justify-around gap-4">
    {#each data as person (person.ord)}
        <div  border="~ border-1" w="[fit-content]" p-4 flex="~ col justify-center">
            
            <h4 font-bold>
                {#if person.social.twitter}
                    <img mx-auto rounded-full inline-block src={person.social.twitter.profileImageUrl} />
                {/if} {person.nickname}
            </h4>
            {#if person.social.twitter}
                <a href={`https://twitter.com/${person.social.twitter.username}`} rel="noreferrer" target="_blank" text-5>
                    <p>
                        <i-logos-twitter /> {person.social.twitter.displayName}
                    </p>
                    <p>
                        <small text-gray>@{person.social.twitter.username}</small>
                    </p>
                </a>
            {/if}
        </div>
    {/each}
</div>
