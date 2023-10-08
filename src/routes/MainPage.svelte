
<script>

    import {GetPays} from "$lib/database";
    import {NumberCarre} from "$lib/database";
    import {GetIdPays} from "$lib/database";
    import {GetTablePays} from "$lib/database";

    //function resGetTablePays() {
        //return GetTablePays();
    //};

</script>

<div>
    <p>Il était une fois, l'histoire de la création de la monnaie.</p>

    <p>La fonction de référence dans le fontionnement d'une fonction {NumberCarre(4)}.</p>
    <!--<p>{GetPays('France')}</p>
    <p>{GetIdPays(1)}</p>-->

    {#await GetTablePays()}
        <p>youhou</p>
    {:then res}
        <p>c'est toi qui bug</p>
        <!--<p>{res}</p>-->
    {:catch error}
        <p>{error}</p>
    {/await}


</div>