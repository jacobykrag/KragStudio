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
            <a href="https://www.fab.com/sellers/Krag%20Studio" target="_blank">Open store page</a>
        </div>
    </section>
</main>
`,
};