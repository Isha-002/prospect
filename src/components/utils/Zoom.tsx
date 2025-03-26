import { memo, useEffect, useRef, useState } from "react";
import { CloseIcon, ZoomIcon } from "../../assets/icons/lesson";

import { ReactNode } from "react";

const Zoom = memo(({ children, shadowColor = "#4f39f6" }: { children: ReactNode; shadowColor?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    
    const handleDialogClose = () => setIsOpen(false);
    const handleClickOutside = (event: MouseEvent) => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isOutside = (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
      );
      
      if (isOutside) {
      setIsOpen(false);
      }
    };

    dialog?.addEventListener('close', handleDialogClose);
    dialog?.addEventListener('click', handleClickOutside);

    return () => {
      dialog?.removeEventListener('close', handleDialogClose);
      dialog?.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="hover:opacity-70 transition-opacity outline-[none] overflow-hidden cursor-pointer"
        aria-label="Zoom in"
      >
        <img src={ZoomIcon} width={30} height={30} className={`-translate-y-[100px]`} 
        style={{ filter: `drop-shadow(0 100px 0 ${shadowColor})` }}/>
      </button>
      <dialog
        ref={dialogRef}
        className="backdrop:bg-[#000000cc] p-0 max-w-none w-full h-full bg-transparent overflow-hidden"
      >
        <div className="relative w-full h-full  flex justify-center items-center cursor-default">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 hover:opacity-70 transition-opacity cursor-pointer"
            aria-label="Close zoom"
          >
            <img src={CloseIcon} width={35} height={35} />
          </button>

          <div className="p-4 cursor-pointer">
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
});

export default Zoom;