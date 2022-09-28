<script lang="ts">
    import {getStore} from "$src/stores"
    import { browser } from "$app/environment"
    const tutorial = getStore('tutorial')
    $tutorial = 3
    console.log('kkk browser', browser)
</script>

<p>{'kkk: '+$tutorial}</p>