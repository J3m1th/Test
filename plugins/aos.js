import AOS from "aos";
// import "aos/dist/aos.css";

export default ({ app }, inject) => {
    app.AOS = new AOS.init();
};

// import "aos/dist/aos.css";

// export default ({ app }) => {
//     app.AOS = new AOS.init({ disable: "phone" }); // eslint-disable-line new-cap
// };

// import Vue from 'vue'
// import AOS from "aos";
// import "aos/dist/aos.css";

// Vue.use(AOS, {
//     disable: "phone"
// })

// Vue.use(AOS);