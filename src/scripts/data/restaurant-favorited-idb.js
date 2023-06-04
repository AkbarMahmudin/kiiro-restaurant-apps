import { openDB } from 'idb'
import CONFIG from '../global/config'

const { DB_NAME, DB_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade (DB) {
    DB.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const FavoriteRestaurantIdb = {
  async get (id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },

  async getAll () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },

  async put (restaurant) {
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant)
  },

  async delete (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavoriteRestaurantIdb
