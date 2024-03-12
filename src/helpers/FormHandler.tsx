import { useDispatchData } from "contextApi/DataContext";
import React from "react";

export const useInputHelper = () => {
  const formDispatch = useDispatchData();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    formDispatch({
      type: "ADD",
      payload: {
        name: name,
        value: value,
      },
    });
  };

  return handleInputChange;
};
export const useFileUploadHeleper = () => {
  const formDispatch = useDispatchData();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      formDispatch({
        type: "ADD",
        payload: {
          name: "photo",
          value: files[0],
        },
      });
    }
  };

  return handleFileChange;
};

export const useMultipleFileUploadHeleper = () => {
  const formDispatch = useDispatchData();
  const handleMultipleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      formDispatch({
        type: "ADD_MULTIPLE_FILE",
        payload: {
          category: "coverImages",
          value: files[0],
        },
      });
    }
  };

  return handleMultipleFileChange;
};

export const useDeleteHeleper = () => {
  const formDispatch = useDispatchData();

  const handleDelete = (name: string) => {
    formDispatch({
      type: "DELETE",
      payload: {
        name: name,
      },
    });
  };

  return handleDelete;
};

export const useMultipleInputHelper = () => {
  const formDispatch = useDispatchData();

  const handleMultipleInput =
    (category: string, index: number) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      formDispatch({
        type: "ADD_MULTIPLE",
        payload: {
          category: category,
          index: index,
          name: name,
          value: value,
        },
      });
    };

  return handleMultipleInput;
};

export const useMultipleDeleteHelper = () => {
  const formDispatch = useDispatchData();

  const handleMultipDelete = (category: string, index: number) => {
    formDispatch({
      type: "DELETE_MULTIPLE",
      payload: {
        category: category,
        index: index,
      },
    });
  };

  return handleMultipDelete;
};

export const useLocationInputHelper = () => {
  const formDispatch = useDispatchData();

  const handleLocation = (data: any, name?: string) => {
    formDispatch({
      type: "ADD_LOCATION",
      payload: {
        name: name,
        value: data,
      },
    });
  };

  return handleLocation;
};

export const useCompanyInputHelper = () => {
  const formDispatch = useDispatchData();

  const handleCompanyAdd =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      formDispatch({
        type: "ADD_COMPANY",
        payload: {
          category: "companies",
          id: id,
          name: name,
          value: value,
        },
      });
    };

  return handleCompanyAdd;
};

export const useProfessionInputHelper = () => {
  const formDispatch = useDispatchData();

  const handleProfessionAdd =
    (companyId: number, professionId: number) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      formDispatch({
        type: "ADD_COMPANY_PROFESSION",
        payload: {
          category: "companies",
          companyId: companyId,
          professionId: professionId,
          name: name,
          value: value,
        },
      });
    };

  return handleProfessionAdd;
};

export const useProfessionDeleteHelper = () => {
  const formDispatch = useDispatchData();

  const handleProfessionDelete = (companyId: number, professionId: number) => {
    formDispatch({
      type: "DELETE_PROFESSION",
      payload: {
        category: "companies",
        companyId: companyId,
        professionId: professionId,
      },
    });
  };

  return handleProfessionDelete;
};
