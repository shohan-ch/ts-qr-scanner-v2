import React, { Dispatch, createContext, useContext, useReducer } from "react";

export const DataContext = createContext<object | any>({});
export const DispatchDataContext = createContext<any>(null);

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, dispatch] = useReducer(DataReducer, {});

  return (
    <>
      <DataContext.Provider value={data}>
        <DispatchDataContext.Provider value={dispatch}>
          {children}
        </DispatchDataContext.Provider>
      </DataContext.Provider>
    </>
  );
};

const DataReducer = (state: any, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD": {
      return {
        ...state,
        [payload.name]: payload.value,
      };
    }

    case "DELETE": {
      delete state[payload.name];
      return {
        ...state,
      };
    }

    case "ADD_MULTIPLE": {
      const { category, index, name, value } = action.payload;
      const categoryArray = state[category] || [];
      const updatedCategoryArray = categoryArray.map((item: any) =>
        item.id === index ? { ...item, [name]: value } : item
      );
      let newState = {
        ...state,
        [category]: categoryArray.some((item: any) => item.id === index)
          ? updatedCategoryArray
          : [...updatedCategoryArray, { id: index, [name]: value }],
      };
      console.log(newState, "new state");
      return newState;
    }

    default:
      throw new Error("Error cause unknown action type! " + type);
      break;
  }
};

export const useData = () => {
  return useContext(DataContext);
};

export const useDispatchData = () => {
  return useContext(DispatchDataContext);
};

export default DataContextProvider;
