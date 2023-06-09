/* eslint-disable no-useless-concat */
import { mockData } from './mock-data';
import NProgress from 'nprogress';
import axios from 'axios';

/**
 *
 * @param {*} events:
 * The following function should be in the “api.js” file.
 * This function takes an events array, then uses map to create a new array with only locations.
 * It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
 * The Set will remove all duplicates from the array.
 */
const tokenCheck = async (accessToken) => {
  if (accessToken) {
    try {
      const result = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
      );
      return await result.json();
    } catch (error) {
      return error;
    }
  }
  return null;
};

const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheckResult = await tokenCheck(accessToken);

  if (!accessToken || (tokenCheckResult && tokenCheckResult.error)) {
    localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://c3oc9mae86.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      window.location.href = authUrl;
      return null;
    }
    return getToken(code);
  }
  return accessToken;
};

export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];
  return locations;
};

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const events = localStorage.getItem("lastEvents");
    NProgress.done();
    return events ? JSON.parse(events) : [];
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = 'https://c3oc9mae86.execute-api.eu-central-1.amazonaws.com/dev/api/get-events' + '/' + token;
    const response = await fetch(url);
    const result = await response.json();
    if (result) {
      NProgress.done();
      localStorage.setItem("lastEvents", JSON.stringify(result.events));
      return result.events;
    } else return null;
  }
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    const newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newurl);
  } else {
    const newurl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newurl);
  }
};

const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
    const response = await fetch(
      'https://c3oc9mae86.execute-api.eu-central-1.amazonaws.com/dev/api/token' + '/' + encodeCode
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    return error;
  }
};

