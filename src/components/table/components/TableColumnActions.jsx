import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import styles from "./TableColumnActions.module.css";

const TableColumnActions = props => {
  const { column, onViewData, onEditData, onDeleteData } = props;
  const popupRef = useRef(null);
  const [openActions, setOpenActions] = useState(false);
  useOnClickOutside(popupRef, () => setOpenActions(false));
  return (
    <div className="relative">
      <div className="flex justify-center">
        <button className="cursor-pointer" onClick={() => setOpenActions(true)}>
          <IoEllipsisVerticalSharp />
        </button>
      </div>
      {openActions ? (
        <div
          className="absolute bg-white shadow border border-gray-200 z-50 min-w-[8rem]"
          ref={popupRef}
        >
          <ul className={styles.actionsMenu}>
            <li>
              <button
                className={styles.actionsMenuButton}
                onClick={() => {
                  setOpenActions(false);
                  onViewData(column);
                }}
              >
                View
              </button>
            </li>
            <li>
              <button
                className={styles.actionsMenuButton}
                onClick={() => {
                  setOpenActions(false);
                  onEditData(column);
                }}
              >
                Edit
              </button>
            </li>
            <li>
              <button
                className={styles.actionsMenuButton}
                onClick={() => {
                  setOpenActions(false);
                  onDeleteData(column);
                }}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default TableColumnActions;
