const CONFIG = {
  API_BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: (size = 'small') => `https://restaurant-api.dicoding.dev/images/${size.toLowerCase()}`,
  DB_NAME: 'restaurant-catalogue-database',
  DB_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants'
}

export default CONFIG
