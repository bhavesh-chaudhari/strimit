import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const subscribe = async (email: string)=>{

    return await axios({
      url: "/api/subscribe",
      method: "POST",
      data: {email},
    });
}

export const useSubscribe = ()=>{
    return useMutation(subscribe, {
        onSuccess: (data)=>{
            // console.log(data)
        },
    })
}