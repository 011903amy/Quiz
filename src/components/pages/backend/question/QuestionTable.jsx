
import ModalDelete from "../partials/modals/ModalDelete";
import ModalConfirm from "../partials/modals/ModalConfirm";
import Pills from "../partials/Pills";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import React from "react";
import { setIsAdd, setIsConfirm, setIsDelete } from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";

const QuestionTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  let counter = 1;
  

  const handleDelete = () => {
    dispatch(setIsDelete(true));
  };
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
  };
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
  };
 
  const handleEdit = () => {
    dispatch(setIsAdd(true));
  };



  return (
    <div>
      {" "}
      <div className="relative p-4 bg-secondary rounded-md mt-10 border border-line">
        {/* <SpinnerTable /> */}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={20} cols={4}/> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Question</th>
                
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
            <td colSpan={100}>
              <IconNoData/>
            </td>
          </tr> */}
              {/* <tr>
            <td colSpan={100}>
              <IconServerError/>
            </td>
          </tr> */}

             {Array.from(Array(6).keys()).map((i) => (
                <tr key={i}>
                  <td>{counter++}.</td>
                  <td>
                    <Pills />
                  </td>
                  <td>xxxx </td>
                  <td>
                    <ul className="table-action">
                      {true ? (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Edit"
                              onClick={() => handleEdit()}
                            >
                              <FilePenLine />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Archive"
                              onClick={() => handleArchive()}
                            >
                              <Archive />
                            </button>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Restore"
                              onClick={() => handleRestore()}
                            >
                              <ArchiveRestore />
                            </button>
                          </li>
                          <li>
                            <button
                              className="tooltip"
                              data-tooltip="Delete"
                              onClick={() => handleDelete()}
                            >
                              <Trash2 />
                            </button>
                          </li>
                        </>
                      )}
                    </ul>
                  </td>
                </tr>
           ))}
            </tbody>
          </table>

         
        </div>
      </div>
      {store.isDelete && <ModalDelete />}
      {store.isConfirm && <ModalConfirm />}
      
    </div>
  );
};

export default QuestionTable;
