
<script>
    import Foot from './Foot.svelte'
</script>

<h1>Librathune</h1>

<p>Tu veux savoir quelle monnaie utilise/utilisais chaque pays ? Navigue dans la carte intéractive et laisse toi surprendre par l'histoire de l'argent au fil du temps !</p>


<footer>
    <Foot />
</footer>


<style>

    h1{
        font-size: 40px;
        text-align: center;
        color : rgb(71, 33, 28);
    }

    p{
        text-align: center;
        font-size: 25px;
    }

</style>

<slot />