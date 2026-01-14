import { createPortal } from "react-dom";

export default function GridStatusBar() {
  return createPortal(
    <div
      className="fixed top-[5px] left-1/2 -translate-x-1/2 w-[311px] h-[50px] bg-white shadow-md rounded-lg px-4 flex items-center gap-3
      z-[9999]"
    >
      <span className="text-sm font-medium">Grid running</span>

      <div className="flex-1 h-2 bg-gray-200 rounded overflow-hidden">
        <div className="h-full w-[10%] bg-blue-600" />
      </div>

      <span className="text-sm font-semibold">10%</span>
    </div>,
    document.body
  );
}
