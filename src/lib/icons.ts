import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faHouse,
  faSearch,
  faUser,
  faPlus,
  faMinus,
  faBarcode
} from '@fortawesome/free-solid-svg-icons';

export const initiateIconLibrary = () => {
  // @ts-ignore
  library.add(
    fab,
    faBook,
    faHouse,
    faUser,
    faSearch,
    faPlus,
    faMinus,
    faBarcode
  );
};
