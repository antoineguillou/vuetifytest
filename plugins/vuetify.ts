import { aliases, fa } from "vuetify/iconsets/fa-svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  app.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
  library.add(faFacebook);

  const vuetify = createVuetify({
    icons: {
      defaultSet: "fa",
      aliases,
      sets: {
        fa,
      },
    },
  });

  app.vueApp.use(vuetify);
});
