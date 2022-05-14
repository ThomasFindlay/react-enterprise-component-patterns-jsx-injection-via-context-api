import { useState, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { IoEllipsisVerticalSharp } from 'react-icons/io5';

const TableColumnActions = (props) => {
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
          className="absolute bg-white shadow border border-gray-400 z-50"
          ref={popupRef}
        >
          <ul className="py-2">
            <li>
              <button
                className="px-4 py-1 hover:bg-gray-100 cursor-pointer w-full"
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
                className="px-4 py-1 hover:bg-gray-100 cursor-pointer w-full"
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
                className="px-4 py-1 hover:bg-gray-100 cursor-pointer w-full"
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
