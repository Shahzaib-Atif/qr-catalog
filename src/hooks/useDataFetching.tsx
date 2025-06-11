import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
  UnknownAction,
} from "@reduxjs/toolkit";
import { Dispatch, useEffect, useState } from "react";

export function useDataFetching(
  url: string,
  localStorageKey: string,
  startLoading: ActionCreatorWithoutPayload<any>,
  finishLoading: ActionCreatorWithoutPayload<any>,
  updateError: ActionCreatorWithPayload<any>,
  dispatch: Dispatch<UnknownAction>,
) {
  const [data, setData] = useState([]);

  const localData = localStorage.getItem(localStorageKey);

  // return from localStorage or fetch from server
  useEffect(() => {
    if (localData) {
      // fetch localStorage Data
      const parsedData = JSON.parse(localData);
      setData(parsedData);
      dispatch(updateError("")); // reset error
    } else {
      // fetch Data from Server
      dispatch(startLoading());
      if (!url)
        return dispatch(updateError("Invalid URL provided to fetch Data!"));

      const fetchDataFromServer = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error("API failed to fetch data");

          if (response.status == 200) {
            const data = await response.json();
            localStorage.setItem(localStorageKey, JSON.stringify(data));
            setData(data);
            dispatch(updateError("")); // reset error
          }
        } catch (e: any) {
          dispatch(updateError(e));
          console.log(e);
        } finally {
          dispatch(finishLoading());
        }
      };
      fetchDataFromServer();
    }

    return () => {
      // cleanup function
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, setData };
}
