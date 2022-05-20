import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import styles from "./TableColumnActions.module.css";
import { useTableActionsContext } from "../TableActionsContext";

const TableColumnActions = props => {
  const { row, column, onViewData, onEditData, onDeleteData } = props;
  const popupRef = useRef(null);
  const [openActions, setOpenActions] = useState(false);
  useOnClickOutside(popupRef, () => setOpenActions(false));
  const renderMenu = useTableActionsContext();

  const renderViewMenuItem = () => {
    return (
      <li key="menu-item-view">
        <button
          className={styles.actionsMenuButton}
          onClick={() => {
            setOpenActions(false);
            onViewData({ row, column });
          }}
        >
          View
        </button>
      </li>
    );
  };

  const renderEditMenuItem = () => {
    return (
      <li key="menu-item-edit">
        <button
          className={styles.actionsMenuButton}
          onClick={() => {
            setOpenActions(false);
            onEditData({ row, column });
          }}
        >
          Edit
        </button>
      </li>
    );
  };

  const renderDeleteMenuItem = () => {
    return (
      <li key="menu-item-delete">
        <button
          className={styles.actionsMenuButton}
          onClick={() => {
            setOpenActions(false);
            onDeleteData({ row, column });
          }}
        >
          Delete
        </button>
      </li>
    );
  };

  const renderDefaultMenu = () => [
    renderViewMenuItem(),
    renderEditMenuItem(),
    renderDeleteMenuItem(),
  ];

  const menuOptions =
    typeof renderMenu === "function"
      ? renderMenu({
          row,
          column,
          styles,
          renderViewMenuItem,
          renderEditMenuItem,
          renderDeleteMenuItem,
          renderDefaultMenu,
          closeMenu: () => setOpenActions(false),
        })
      : renderDefaultMenu();

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
          <ul className={styles.actionsMenu}>{menuOptions}</ul>
        </div>
      ) : null}
    </div>
  );
};

export default TableColumnActions;
