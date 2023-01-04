import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "../utils/axios";

const addContactVisited = async () => {
  return request({ url: "/collect/contact-info", method: "patch" });
};

export const useTrackContactVisit = () => {
  return useMutation({
    mutationFn: addContactVisited,
    onSuccess: (data) => {
    },
  });
};
