import { imageUrlRecources } from '../resources/url';

const initialFilterState = {
  data: {},
  listPosts: [],
};

export default function (userReducer = initialFilterState, action) {
  switch (action.type) {
    case 'UPDATE_USERPROFILE': {
      const data = {
        name: 'name' in action.data ? action.data.name : '',
        email: 'email' in action.data ? action.data.email : '',
        phone: 'phone' in action.data ? action.data.phone : '',
        city: 'city' in action.data ? action.data.city : '',
        imageUrl: 'imageUrl' in action.data ? action.data.imageUrl : imageUrlRecources.noPhoto,
      };

      return { ...userReducer, data };
    }
    case 'UPDATE_USER_POSTS':
      return { ...userReducer, listPosts: action.listPosts };
    default:
      return userReducer;
  }
}
