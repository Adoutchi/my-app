
<script>
    import Foot from './Foot.svelte'
</script>

<div id="bandeauAccueil"> 

    <h1><a href="/"><img src='TitreSite.png' alt="Titre du site"></a></h1>

    <table id="menuBandeau" align="center">

        <tr>
            <th><a href="/">Histoire</a></th>
            <th>Liste</th>
            <th><a href="/cartes">Cartes</a></th>
            <th><img id="logoRecherche" src='Recherche.png' alt="Recherche"></th>
        </tr>
    
    </table>

</div>



<footer>
    <Foot />
</footer>


<!--
    h1{
        background-color: #2b4970;
        font-size: 40px;
        text-align: center;
        margin: 0;
        padding : 10px;
        top: 0%;
        color : rgb(253, 160, 74);
    }
-->

<style>

    #bandeauAccueil{
        top: 0%;
        padding : 32px;
        background-color: #2b4970;
    }

    #menuBandeau{
        font-size: 20px;
    }

    #logoRecherche{
        height: 24px;
        width: 24px;
    }

    h1{
        top: 0%;
        padding-left : 250px;
        position: absolute;
    }

    p{
        text-align: center;
        font-size: 25px;
    }

    th{
        padding-left: 20px;
        padding-right: 20px;
        color : rgb(195, 179, 164);       
    }

    a{
        text-decoration:none;
        color : rgb(195, 179, 164);
    }

</style>

<slot />