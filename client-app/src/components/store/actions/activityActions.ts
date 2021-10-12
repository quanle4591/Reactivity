import { IActivity } from "../../app/models/activity";

export const detail = (id: string) => {
  return {
    type: "DETAIL",
    payload: id,
  };
};

export const list = (activities: IActivity[]) => {
  return {
    type: "LIST",
    payload: activities,
  };
};

export const actId = (id: string) => {
  return {
    type: "ID",
    payload: id,
  };
};
