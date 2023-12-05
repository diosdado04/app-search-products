export enum PRODUCTS_LABEL_CONSTANTS {
  MANUFACTURE_LABEL = 'Fabricante',
  BAR_CODE_LABEL = 'Código Barra',
  CATEGORY_LABEL = 'Categoría',
  SEARCH_LABEL = 'Palabras Claves',
  BRAND_LABEL = 'Marca',
}

export enum PRODUCTS_FOMCONTROL_CONSTANTS {
  MANUFACTURE_LABEL = 'manufacturer',
  BAR_CODE_LABEL = 'barcode',
  CATEGORY_LABEL = 'category',
  SEARCH_LABEL = 'search',
  BRAND_LABEL = 'brand',
}

export const ARRAY_PRODUCTS_LABEL_CONSTANTS = [
  {
    label: PRODUCTS_LABEL_CONSTANTS.MANUFACTURE_LABEL,
    formcontrol: PRODUCTS_FOMCONTROL_CONSTANTS.MANUFACTURE_LABEL,
  },
  {
    label: PRODUCTS_LABEL_CONSTANTS.BAR_CODE_LABEL,
    formcontrol: PRODUCTS_FOMCONTROL_CONSTANTS.BAR_CODE_LABEL,
  },
  {
    label: PRODUCTS_LABEL_CONSTANTS.CATEGORY_LABEL,
    formcontrol: PRODUCTS_FOMCONTROL_CONSTANTS.CATEGORY_LABEL,
  },
  {
    label: PRODUCTS_LABEL_CONSTANTS.SEARCH_LABEL,
    formcontrol: PRODUCTS_FOMCONTROL_CONSTANTS.SEARCH_LABEL,
  },
  {
    label: PRODUCTS_LABEL_CONSTANTS.BRAND_LABEL,
    formcontrol: PRODUCTS_FOMCONTROL_CONSTANTS.BRAND_LABEL,
  },
];