import { FaX } from "react-icons/fa6";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Dialog({ isOpen, onClose, title, children }: DialogProps) {
  const handleClose = (): void => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} />
      <div className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-4 shadow-xl overflow-auto">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold" id="modal-title">
            {title}
          </h1>
          <button onClick={handleClose} type="button" aria-label="Close dialog">
            <FaX />
          </button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
