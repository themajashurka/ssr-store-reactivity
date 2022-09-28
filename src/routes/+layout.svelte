<script lang="ts">
    import { page } from '$app/stores'
    import Kkk from "$cmp/kkk.svelte"
    import { setStores, getStore } from '$src/stores'

    setStores()

    const tutorial = getStore('tutorial')

    $tutorial = 100000

    //SSR-miatt, mert a store nem reactive szerver oldali render közben
    //sosem változik a korábbi érték, és annak a nézete
    //kérdéses, hogy hogyan megoldható az, amikor pl a hivatkozott oldal load functionje egy előre nem ismert értéket próbál belepumpáni a store-ba
    //természetesen hydration után mindig felvillan a téma
    $:if($page.url.pathname === '/p1'){
        $tutorial = 3
    }
    else {
        $tutorial = 2
    }

</script>

<p>{$tutorial}</p>
<Kkk/>
<slot/>