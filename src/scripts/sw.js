import { registerRoute } from 'workbox-routing'
import { precacheAndRoute } from 'workbox-precaching'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'
import { skipWaiting, clientsClaim, setCacheNameDetails } from 'workbox-core'

skipWaiting()
clientsClaim()

setCacheNameDetails({
  prefix: 'kiiro-restaurant-apps',
  suffix: 'v1',
  precache: 'precache'
})

precacheAndRoute(
  [
    ...self.__WB_MANIFEST
  ],
  {
    ignoreURLParametersMatching: [/.*/]
  }
)

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(detail))/,
  new NetworkFirst({
    cacheName: "restaurant-api-dicoding",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      })
    ]
  })
)

registerRoute(
  /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list))/,
  new StaleWhileRevalidate({
    cacheName: "restaurant-api-dicoding",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      })
    ]
  })
)

registerRoute(
  /\.(?:png|jpx|css|svg)$/,
  new CacheFirst({
    cacheName: 'restaurant-images',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
        maxEntries: 30
      })
    ]
  })
)
