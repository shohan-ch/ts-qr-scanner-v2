import axios from "axios";
import authStorage from "helpers/AuthStorage";
import { useState } from "react";

const useApi = () => {
  const BACKEND_API = "http://localhost:3000/api/v1";
  axios.defaults.baseURL = BACKEND_API;
  axios.defaults.withCredentials = true; // with credentials true is need when cookie set needed
  axios.defaults.headers.Authorization =
    (authStorage.get() && "Bearer " + authStorage.get()) || null;

  async function getRequest(url: string) {
    try {
      let data = await axios.get(url);
      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.response };
    }
  }
  async function postRequest(url: string, payload: any, config = {}) {
    try {
      let response = await axios.post(url, payload, config);
      return { data: response.data, error: null };
    } catch (err: any) {
      let errResponse = err.response.data;
      return { data: null, error: errResponse };
    }
  }
  async function patchRequest(url: string, payload: any, config?: any) {
    try {
      let data = await axios.patch(url, payload, config || {});
      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.response };
    }
  }
  async function deleteRequest(url: string) {
    try {
      let data = await axios.delete(url);
      return { data, error: null };
    } catch (err: any) {
      return { data: null, error: err.response };
    }
  }

  // async function getRequest(url: string) {
  //   return (await axios.get(url)).data;
  // }

  // async function postRequest(url: string, payload: any, config?: any) {
  //   return (await axios.post(url, payload, config || {})).data;
  // }

  // async function patchRequest(url: string, payload: any, config?: any) {
  //   return (await axios.patch(url, payload, config || {})).data;
  // }

  // async function deleteRequest(url: string) {
  //   return (await axios.delete(url)).data;
  // }

  return { getRequest, postRequest, patchRequest, deleteRequest };
};

export default useApi;
