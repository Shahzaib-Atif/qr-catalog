import { ActionCreatorWithPayload, UnknownAction } from "@reduxjs/toolkit";
import { Dispatch, useEffect } from "react";

/**
 * start an interval to reload the data automatically after some time
 * @param url
 * @param localStorageKey
 * @param setError
 */
export function useDataReloading(
  url: string,
  localStorageKey: string,
  updateError: ActionCreatorWithPayload<any>,
  dispatch: Dispatch<UnknownAction>,
) {
  const intervalDurationInMins = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("API failed to Reload Data");
        const data = await response.json();
        localStorage.setItem(localStorageKey, JSON.stringify(data));
      } catch (e: any) {
        dispatch(
          updateError("An error occured while automatic reloading of data"),
        );
        console.log(e);
      }
    };

    // fetchData();
    const timeoutId = setInterval(
      async () => {
        fetchData();
      },
      1000 * 60 * intervalDurationInMins,
    );

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
