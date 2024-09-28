import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  axiosInstanceFree,
  axiosInstanceGraphGL,
  axiosInstanceQuestion,
} from "@src/common/axios/AxiosInstance.ts";
import { isAxiosError } from "axios";

export const useBoardQuery = () => {
  const useGetIssuesFromFreeBoard = () => {
    return useQuery({
      queryKey: ["board", "freeBoard"],
      queryFn: async ({ queryKey }) => {
        const res = await axiosInstanceFree.get("/issues");

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      refetchOnWindowFocus: false,
    });
  };

  const useGetIssuesDetailFromFreeBoard = (id?: string) => {
    return useQuery({
      queryKey: ["board", "freeBoard", id],
      queryFn: async ({ queryKey }) => {
        const res = await axiosInstanceFree.get(`/issues/${id}`);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      enabled: Boolean(id),
      refetchOnWindowFocus: false,
    });
  };

  const useGetIssuesFromQuestionBoard = () => {
    return useQuery({
      queryKey: ["board", "questionBoard"],
      queryFn: async ({ queryKey }) => {
        const res = await axiosInstanceQuestion.get("/issues");

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      refetchOnWindowFocus: false,
    });
  };

  const useGetIssuesDetailFromQuestionBoard = (id?: string) => {
    return useQuery({
      queryKey: ["board", "questionBoard", id],
      queryFn: async ({ queryKey }) => {
        const res = await axiosInstanceQuestion.get(`/issues/${id}`);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      enabled: Boolean(id),
      refetchOnWindowFocus: false,
    });
  };

  const useAddIssuesFromFreeBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (data: any) => {
        const res = await axiosInstanceFree.post(`/issues`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: () => {
        console.log("query");
        // queryClient.invalidateQueries({ queryKey: ["board, freeBoard"] });
      },
      onSettled: async (data) => {
        // return queryClient.invalidateQueries({ queryKey });
      },
    });

    return mutation;
  };

  const useUpdateIssuesFromFreeBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async ({ id, data }: any) => {
        const res = await axiosInstanceFree.patch(`/issues/${id}`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: () => {
        // queryClient.invalidateQueries({ queryKey: ["board, freeboard"] });
      },
      onSettled: async (data) => {
        // return queryClient.invalidateQueries({ queryKey });
      },
    });

    return mutation;
  };

  const useDeleteIssuesFromFreeBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (id: string) => {
        const res = await axiosInstanceGraphGL.post(``, {
          query: `
				mutation {
					deleteIssue(input: {issueId: "${id}", clientMutationId: "delete Free Board Issue" }) {
						clientMutationId
					}
				}
			`,
        });

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["board, freeBoard"] });
      },
      onSettled: async (data) => {
        // return queryClient.invalidateQueries({ queryKey });
      },
    });

    return mutation;
  };

  const useAddIssuesFromQuestionBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (data: any) => {
        const res = await axiosInstanceQuestion.post(`/issues`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["board, questionBoard"] });
      },
      onSettled: async (data) => {
        // return queryClient.invalidateQueries({ queryKey });
      },
    });

    return mutation;
  };

  const useUpdateIssuesFromQuestionBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async ({ id, data }: any) => {
        const res = await axiosInstanceQuestion.patch(`/issues/${id}`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: () => {},
      onSettled: async (data) => {},
    });

    return mutation;
  };

  const useDeleteIssuesFromQuestionBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (id: string) => {
        const res = await axiosInstanceGraphGL.post(``, {
          query: `
				mutation {
					deleteIssue(input: {issueId: "${id}", clientMutationId: "delete Free Board Issue" }) {
						clientMutationId
					}
				}
			`,
        });

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["board, question"] });
      },
      onSettled: async (data) => {
        // return queryClient.invalidateQueries({ queryKey });
      },
    });

    return mutation;
  };

  const useDeleteIssues = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (id: string) => {
        const res = await axiosInstanceGraphGL.post(``, {
          query: `
				mutation {
					deleteIssue(input: {issueId: "${id}", clientMutationId: "delete Free Board Issue" }) {
						clientMutationId
					}
				}
			`,
        });

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async (res) => {
        console.log("query res", res);
      },
      onSettled: async (data) => {},
    });

    return mutation;
  };

  return {
    query: {
      getIssuesFromFreeBoard: useGetIssuesFromFreeBoard,
      getIssuesDetailFromFreeBoard: useGetIssuesDetailFromFreeBoard,
      getIssuesFromQuestionBoard: useGetIssuesFromQuestionBoard,
      getIssuesDetailFromQuestionBoard: useGetIssuesDetailFromQuestionBoard,
    },
    mutate: {
      addIssuesFromFreeBoard: useAddIssuesFromFreeBoard,
      updateIssuesFromFreeBoard: useUpdateIssuesFromFreeBoard,
      // deleteIssuesFromFreeBoard: useDeleteIssuesFromFreeBoard,

      addIssuesFromQuestionBoard: useAddIssuesFromQuestionBoard,
      updateIssuesFromQuestionBoard: useUpdateIssuesFromQuestionBoard,
      // deleteIssuesFromQuestionBoard: useDeleteIssuesFromQuestionBoard,

      deleteIssues: useDeleteIssues,
    },
  };
};
