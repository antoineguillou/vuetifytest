import { aliases, fa } from "vuetify/iconsets/fa-svg";
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  app.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
  // Font Awesome Solid imports
  library.add(faTimes, faChevronDown);
  // Font Awesome Brands imports
  library.add(
    faFacebook,
    faInstagram,
    faPinterest,
    faYoutube,
    faTwitter,
    faLinkedin
  );

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
