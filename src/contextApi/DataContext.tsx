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

    case "DELETE_MULTIPLE": {
      const { category, index } = action.payload;

      let deleteByCategory = (state[category] || []).filter(
        (item: any) => item.id !== index
      );

      return { ...state, [category]: deleteByCategory };
    }

    case "ADD_LOCATION": {
      const { value, name } = action.payload;
      let locationAdd = name
        ? { location: { ...state.location, [name]: value } }
        : { location: { ...value } };
      return { ...state, ...locationAdd };
    }

    case "DELETE_LOCATION": {
      const { value, name } = action.payload;
      let locationAdd = name
        ? { location: { ...state.location, [name]: value } }
        : { location: { ...value } };
      return { ...state, ...locationAdd };
    }

    case "ADD_COMPANY": {
      const { category, value, name, id } = action.payload;
      const selectCompanies = state[category] || [];
      const updateCompnaies = selectCompanies.map((company: any) =>
        company.id === id ? { ...company, [name]: value } : company
      );
      return {
        ...state,
        [category]: selectCompanies.some((item: any) => item.id === id)
          ? updateCompnaies
          : [...selectCompanies, { id: id, [name]: value }],
      };
    }

    case "ADD_COMPANY_PROFESSION": {
      const { category, value, name, companyId, professionId } = action.payload;
      // alert(JSON.stringify(action.payload));
      let selectCompanies = state[category] || [];
      let adddProfession = selectCompanies.map((company: any) => {
        return company.id === companyId
          ? {
              ...company,
              professions: (company.professions || []).some(
                (item: any) => item.id == professionId
              )
                ? company.professions.map((profession: any) => {
                    return profession.id === professionId
                      ? { ...profession, [name]: value }
                      : { ...profession };
                  })
                : [
                    ...(company.professions || []),
                    { id: professionId, [name]: value },
                  ],
            }
          : { ...company };
      });
      return { ...state, [category]: adddProfession };
    }

    case "DELETE_PROFESSION": {
      const { category, companyId, professionId } = action.payload;

      let deleteProfession = (state[category] || []).map((company: any) =>
        company.id === companyId
          ? {
              ...company,
              professions: company.professions.filter(
                (profession: any) => profession.id != professionId
              ),
            }
          : company
      );

      return { ...state, [category]: deleteProfession };
    }

    case "ADD_MULTIPLE_FILE": {
      const { category, value } = action.payload;
      let coverImages = state[category] || [];
      let addImages = [...coverImages, { value }];
      return { ...state, [category]: addImages };
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
