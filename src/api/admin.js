const API_HOST = "https://test.portal.vgu.edu.vn/api";

// User & Category Endpoints
export const USER = `${API_HOST}/users`;
export const CATEGORIES = `${API_HOST}/category`;
export const APPLICATIONS = `${API_HOST}/application`;

// User-App Group Endpoints
export const GET_ALL_GROUP = `${API_HOST}/user-app-group`;
export const GET_USER_CATEGORIES = (userId) => `${API_HOST}/user-app-group/user/${userId}/categories`;
export const GET_CATEGORY_USERS = (categoryId) => `${API_HOST}/user-app-group/category/${categoryId}/users`;
export const ADD_USER_TO_CATEGORY = (userId, categoryId) => `${API_HOST}/user-app-group/user/${userId}/category/${categoryId}`;
export const REMOVE_USER_FROM_CATEGORY = (userId, categoryId) => `${API_HOST}/user-app-group/user/${userId}/category/${categoryId}`;