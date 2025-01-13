type ConfirmDialogProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  isOpen: boolean;
};

export default function ConfirmDialog(props: ConfirmDialogProps) {
  if (!props.isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-sm shadow-lg w-[22rem] p-8'>
        <p className='text-gray-800 font-medium text-md'>{props.message}</p>
        <div className='mt-6 flex justify-end space-x-3'>
          <button
            onClick={props.onCancel}
            className='px-4 py-2 text-sm bg-[#F8ED62] rounded-sm hover:bg-[#f1e53a]'
          >
            Cancel
          </button>
          <button
            onClick={props.onConfirm}
            className='px-4 py-2 text-sm text-white bg-[#be29ec] rounded-sm hover:bg-[#ae2fd4]'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}