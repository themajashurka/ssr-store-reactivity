<script lang="ts">
    import Kkk from '$cmp/kkk.svelte';
import { getStore } from '$src/stores'

    const tutorial = getStore('tutorial')

    console.log('p1', $tutorial)
    $tutorial = 3
    console.log('p1', $tutorial)
</script>

<p>{'p1: ' + $tutorial}</p>
<Kkk/>