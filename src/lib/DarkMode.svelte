<script>

    import {browser} from "$app/environment";

    if (browser) {
        const mask = document.querySelector('.shadow');

        document.addEventListener('pointermove', (pos) => {
            let x = parseInt(pos.clientX / window.innerWidth * 100);
            let y = parseInt(pos.clientY / window.innerHeight * 100);

            mask.style.setProperty('--mouse-x', x + '%');
            mask.style.setProperty('--mouse-y', y + '%');
        });
    }

</script>

<div
        class="shadow"
>

    <button>
        Dark mode
    </button>
</div>

<style>
    :root {
        --mouse-x: 50%;
        --mouse-y: 50%;
    }

    .shadow {
        position: fixed;
        z-index: 999;
        width: 100vw;
        height: 100vh;
        background-color: hsla(0, 0%, 0%, 0.9);
        mask: radial-gradient(
                circle at var(--mouse-x) var(--mouse-y),
                transparent 40px,
                black 150px
        );
        -webkit-mask: radial-gradient(
                circle at var(--mouse-x) var(--mouse-y),
                transparent 40px,
                black 150px
        );
    }

</style>
