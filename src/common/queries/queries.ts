import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  axiosInstance,
  axiosInstanceFree,
  axiosInstanceGraphGL,
  axiosInstanceQuestion,
  REPO_OWNER,
} from "@src/common/axios/AxiosInstance.ts";
import { isAxiosError } from "axios";
import { updateBoardItemDTO } from "@src/interfaces/common-interface.ts";

export const PER_PAGE = 10;

export const useBoardQuery = () => {
  const useGetIssuesFromBoard = () => {
    return useQuery({
      queryKey: ["board"],
      queryFn: async ({ queryKey }) => {
        // const res = await axiosInstanceFree.get(`/issues?per_page=${PER_PAGE}`);
        const fRes = await axiosInstance.get(
          `/search/issues?q=repo:${REPO_OWNER}/freeboard+is:issue+is:open&per_page=5`
        );
        const qRes = await axiosInstance.get(
          `/search/issues?q=repo:${REPO_OWNER}/questionboard+is:issue+is:open&per_page=5`
        );

        if (isAxiosError(fRes)) {
          throw fRes;
        }

        if (isAxiosError(qRes)) {
          throw qRes;
        }

        return {
          freeBoard: fRes.data,
          questionBoard: qRes.data,
        };
      },
      refetchOnWindowFocus: false,
      retry: 2,
    });
  };

  const useGetIssuesFromFreeBoard = ({
    page,
    filterType,
    searchStr,
  }: {
    page: number;
    filterType?: string;
    searchStr?: string;
  }) => {
    return useQuery({
      queryKey: ["board", "freeBoard", page, filterType, searchStr],
      queryFn: async ({ queryKey }) => {
        const filter = searchStr ? `${searchStr}+in:${filterType}` : "";

        const res = await axiosInstance.get(
          `/search/issues?q=repo:${REPO_OWNER}/freeboard+is:issue+is:open+${filter}&per_page=${PER_PAGE}&page=${page}`
        );

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      refetchOnWindowFocus: false,
      retry: 2,
    });
  };

  const useGetIssuesDetailFromFreeBoard = (id?: string) => {
    return useQuery({
      queryKey: ["board", "freeBoard", "detail", id],
      queryFn: async ({ queryKey }) => {
        const res = await axiosInstanceFree.get(`/issues/${id}`);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      enabled: Boolean(id),
      refetchOnWindowFocus: false,
      retry: 2,
    });
  };

  const useGetIssuesFromQuestionBoard = ({
    page,
    filterType,
    searchStr,
  }: {
    page: number;
    filterType?: string;
    searchStr?: string;
  }) => {
    return useQuery({
      queryKey: ["board", "questionBoard", page, filterType, searchStr],
      queryFn: async ({ queryKey }) => {
        const filter = searchStr ? `${searchStr}+in:${filterType}` : "";

        const res = await axiosInstance.get(
          `/search/issues?q=repo:${REPO_OWNER}/questionboard+is:issue+is:open+${filter}&per_page=${PER_PAGE}&page=${page}`
        );

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      refetchOnWindowFocus: false,
      retry: 2,
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
      retry: 2,
    });
  };

  const useAddIssuesFromFreeBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (data: updateBoardItemDTO) => {
        const res = await axiosInstanceFree.post(`/issues`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["board", "freeBoard"] });
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
      mutationFn: async ({ id, data }: { id: string; data: updateBoardItemDTO }) => {
        const res = await axiosInstanceFree.patch(`/issues/${id}`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["board", "freeBoard"] });
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
        const res = await axiosInstanceFree.patch(`/issues/${id}`, {
          state: "closed",
        });

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async (res) => {
        await queryClient.invalidateQueries({ queryKey: ["board", "freeBoard"] });
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
      mutationFn: async (data: updateBoardItemDTO) => {
        const res = await axiosInstanceQuestion.post(`/issues`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["board", "questionBoard"] });
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
      mutationFn: async ({ id, data }: { id: string; data: updateBoardItemDTO }) => {
        const res = await axiosInstanceQuestion.patch(`/issues/${id}`, data);

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["board", "questionBoard"] });
      },
      onSettled: async (data) => {},
    });

    return mutation;
  };

  const useDeleteIssuesFromQuestionBoard = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: async (id: string) => {
        const res = await axiosInstanceQuestion.patch(`/issues/${id}`, {
          state: "closed",
        });

        if (isAxiosError(res)) {
          throw res;
        }

        return res.data;
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["board", "questionBoard"] });
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
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["board"] });
      },
      onSettled: async (data) => {},
    });

    return mutation;
  };

  return {
    query: {
      getIssuesFromBoard: useGetIssuesFromBoard,
      getIssuesFromFreeBoard: useGetIssuesFromFreeBoard,
      getIssuesDetailFromFreeBoard: useGetIssuesDetailFromFreeBoard,
      getIssuesFromQuestionBoard: useGetIssuesFromQuestionBoard,
      getIssuesDetailFromQuestionBoard: useGetIssuesDetailFromQuestionBoard,
    },
    mutate: {
      addIssuesFromFreeBoard: useAddIssuesFromFreeBoard,
      updateIssuesFromFreeBoard: useUpdateIssuesFromFreeBoard,

      /* issue 삭제 대체 state=>closed */
      deleteIssuesFromFreeBoard: useDeleteIssuesFromFreeBoard,

      addIssuesFromQuestionBoard: useAddIssuesFromQuestionBoard,
      updateIssuesFromQuestionBoard: useUpdateIssuesFromQuestionBoard,

      /* issue 삭제 대체 state=>closed */
      deleteIssuesFromQuestionBoard: useDeleteIssuesFromQuestionBoard,

      /* issue 삭제 GraphGL */
      deleteIssues: useDeleteIssues,
    },
  };
};
