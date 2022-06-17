import { useState, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import styles from "./TableColumnActions.module.css";
import { useTableActionsContext } from "../TableActionsContext";

const renderViewMenuItem = (row, column, setOpenActions) => onViewData => {
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

const renderEditMenuItem = (row, column, setOpenActions) => onEditData => {
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

const renderDeleteMenuItem = (row, column, setOpenActions) => onDeleteData => {
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

const renderDefaultMenu =
  (row, column, setOpenActions) =>
  ({ onViewData, onEditData, onDeleteData }) =>
    [
      renderViewMenuItem(row, column, setOpenActions)(onViewData),
      renderEditMenuItem(row, column, setOpenActions)(onEditData),
      renderDeleteMenuItem(row, column, setOpenActions)(onDeleteData),
    ];

const TableColumnActions = props => {
  const { row, column } = props;
  const popupRef = useRef(null);
  const [openActions, setOpenActions] = useState(false);
  useOnClickOutside(popupRef, () => setOpenActions(false));
  const renderMenu = useTableActionsContext();

  const menuOptions = renderMenu({
    row,
    column,
    styles,
    renderViewMenuItem: renderViewMenuItem(row, column, setOpenActions),
    renderEditMenuItem: renderEditMenuItem(row, column, setOpenActions),
    renderDeleteMenuItem: renderDeleteMenuItem(row, column, setOpenActions),
    renderDefaultMenu: renderDefaultMenu(row, column, setOpenActions),
    closeMenu: () => setOpenActions(false),
  });

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
