import data from '../DATA.json';

const RestaurantItem = (name, rating, city, pictureId) => {
  const item = document.createElement('article');
  item.classList.add('restaurant-item');

  // Restaurant Thumbnail
  const restaurantThumbnail = RestaurantThumbnail(pictureId, name);

  // Restaurant Content
  const restaurantContent = RestaurantContent(name, rating, city);

  item.appendChild(restaurantThumbnail);
  item.appendChild(restaurantContent);

  return item;
};

const RestaurantThumbnail = (src, alt) => {
  const thumbnail = document.createElement('img');
  thumbnail.classList.add('restaurant-item__thumbnail');
  thumbnail.src = src;
  thumbnail.alt = alt;

  return thumbnail;
}

const RestaurantContent = (name, rating, city) => {
  const content = document.createElement('div');
  content.classList.add('restaurant-item__content');

  // Restaurant Name
  const restaurantName = document.createElement('h2');
  restaurantName.classList.add('restaurant-item__name');
  restaurantName.innerText = name;

  // Restaurant Info
  const restaurantInfo = document.createElement('div');
  restaurantInfo.classList.add('restaurant-item__info');

  // Restaurant Rating
  const restaurantRating = RestaurantRating(rating);

  // Restaurant City
  const restaurantCity = RestaurantCity(city);

  // Restaurant Is Favorite
  const restaurantIsFavorite = RestaurantIsFavorite();
  
  restaurantInfo.appendChild(restaurantRating);
  restaurantInfo.appendChild(restaurantCity);
  restaurantInfo.appendChild(restaurantIsFavorite);

  content.appendChild(restaurantName);
  content.appendChild(restaurantInfo);

  return content;
};

const RestaurantRating = (rating) => {
  const restaurantRating = document.createElement('span');
  restaurantRating.classList.add('restaurant-item__rating');

  const starIcon = document.createElement('img');
  starIcon.classList.add('icon');
  starIcon.src = '/images/icons/star.svg';
  starIcon.alt = 'Ikon bintang';

  const ratingText = document.createElement('span');
  ratingText.innerText = rating;

  restaurantRating.appendChild(starIcon);
  restaurantRating.appendChild(ratingText);

  return restaurantRating;
};

const RestaurantCity = (city) => {
  const restaurantCity = document.createElement('span');
  restaurantCity.classList.add('restaurant-item__city');

  const locationIcon = document.createElement('img');
  locationIcon.classList.add('icon');
  locationIcon.src = '/images/icons/location.svg';
  locationIcon.alt = 'Ikon pin lokasi';

  const cityText = document.createElement('span');
  cityText.innerText = city;

  restaurantCity.appendChild(locationIcon);
  restaurantCity.appendChild(cityText);

  return restaurantCity;
};

const RestaurantIsFavorite = () => {
  const restaurantIsFavorite = document.createElement('button');
  restaurantIsFavorite.classList.add('restaurant-item__favorite', 'btn');
  restaurantIsFavorite.setAttribute('aria-label', 'Tambahkan ke daftar restoran favorit');

  // Favorite Icon
  restaurantIsFavorite.innerHTML = `
    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.50472 13L1.13916 7.01207C-2.32038 3.41931 2.76514 -3.47878 7.50472 2.10197C12.2443 -3.47878 17.3068 3.44326 13.8703 7.01207L7.50472 13Z" fill="#EEEEEE"/>
    </svg>
  `;

  restaurantIsFavorite.addEventListener('click', event => {
    restaurantIsFavorite.classList.toggle('active');
    event.stopPropagation();
  });

  return restaurantIsFavorite;
};

const renderRestaurantList = () => {
  const restaurantListElement = document.querySelector('#restaurants');
  data.restaurants.map(restaurant => {
    const restaurantItem = RestaurantItem(restaurant.name, restaurant.rating, restaurant.city, restaurant.pictureId);
    restaurantListElement.appendChild(restaurantItem);
  })
};

export default renderRestaurantList;
