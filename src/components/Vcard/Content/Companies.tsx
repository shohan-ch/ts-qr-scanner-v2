import {
  useCompanyInputHelper,
  useMultipleDeleteHelper,
  useProfessionDeleteHelper,
  useProfessionInputHelper,
} from "helpers/FormHandler";
import React, { useState } from "react";
import BaseInput from "utils/Forms/BaseInput";
import BaseMultipleSelect from "utils/Forms/BaseMultipleSelect";

type Props = {};

const Companies = (props: Props) => {
  const handleCompanyInput = useCompanyInputHelper();
  const handleProfessionInput = useProfessionInputHelper();
  const handleCompanyDelete = useMultipleDeleteHelper();
  const handleProfessionInputDelete = useProfessionDeleteHelper();
  const [companyContainers, setCompanyContainers] = useState<any[]>([
    { id: 1, professions: [{ id: 1 }] },
  ]);

  const handleAddContainer = (name: string) => () => {
    if (name === "company") {
      let lastId = companyContainers.slice(-1)[0]?.id || 0;
      setCompanyContainers([
        ...companyContainers,
        { id: lastId + 1, professions: [{ id: 1 }] },
      ]);
    }
  };

  const handleRemoveContainer = (id: number) => {
    const updatedCompanies = companyContainers.filter(
      (company) => company.id !== id
    );
    setCompanyContainers(updatedCompanies);
    handleCompanyDelete("companies", id);
  };

  const handleProfessionAdd = (companyId: number) => () => {
    const updatedCompanies = companyContainers.map((company) => {
      if (company.id === companyId) {
        let lastId = company.professions.slice(-1)[0]?.id || 0;
        return {
          ...company,
          professions: [...company.professions, { id: lastId + 1 }],
        };
      }
      return company;
    });
    setCompanyContainers(updatedCompanies);
  };

  const handleProfessionRemove =
    (companyId: number, professionId: number) => () => {
      const filterProfession = companyContainers.map((company) =>
        company.id === companyId
          ? {
              ...company,
              professions: company.professions.filter(
                (profession: any) => profession.id !== professionId
              ),
            }
          : company
      );
      setCompanyContainers(filterProfession);
      handleProfessionInputDelete(companyId, professionId);
    };

  return (
    <div className="p-2 border rounded shadow">
      {companyContainers.map((company, index) => (
        <div key={company.id}>
          <div className="flex justify-between">
            <h3 className="my-3 font-semibold">Company {index + 1}</h3>
            <button onClick={() => handleRemoveContainer(company.id)}>
              Delete
            </button>
          </div>
          <BaseInput
            name="name"
            handleChange={handleCompanyInput(company.id)}
            style="!rounded-full"
          />
          <div className="p-5 bg-gray-100 rounded-md shadow">
            {company.professions.map((profession: any) => (
              <div className="flex gap-x-3" key={company.id + profession.id}>
                <input
                  onChange={handleProfessionInput(company.id, profession.id)}
                  type={"text"}
                  name="name"
                  className={` bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                />

                <button
                  onClick={handleProfessionRemove(company.id, profession.id)}
                >
                  X
                </button>
              </div>
            ))}

            <button
              onClick={handleProfessionAdd(company.id)}
              type="button"
              className="p-2 my-4 ml-1 text-black rounded-full shadow-lg ring-blue-600 ring"
            >
              Add profession
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={handleAddContainer("company")}
        type="button"
        className="p-2 my-4 ml-1 text-black rounded-full shadow-lg ring-blue-600 ring"
      >
        Add Company
      </button>
    </div>
  );
};

export default Companies;
