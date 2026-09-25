import Animation from '../components/Animation.js';

export default {
components: {
Animation
},
template: `
<main>
    <section class="home">
        <div>
            <h2>Get in touch</h2>
            <Animation></Animation>
        </div>
        <div class="contactInfo">
            <h2>Email:</h2>
            <a href="mailto:kontakt@kragstudio.dk">kontakt@kragstudio.dk</a>
        </div>
        <div class="contactInfo">
            <h2>FAB:</h2>
            <a href="https://www.fab.com/sellers/Krag%20Studio" target="_blank"><button><i class="fa-solid fa-store"></i> / Explore store</button></a>
            <a href="https://fbx-guide.kragstudio.dk/guideone" target="_blank"><button><i class="fa-brands fa-readme"></i> / FBX Guide</button></a>
        </div>
    </section>
</main>
`,
};