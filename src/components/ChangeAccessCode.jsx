import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function ChangeAccessCode() {
  const [isOpen, setIsOpen] = useState(false);
  const [accessCode, setAccessCode] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put('http://152.42.139.53:4040/api/Admin/edit-access-code', {
        newAccessCode: accessCode
      });
      console.log(response.data);
      closeModal();
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
      >
        Change Access Code
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Enter New Access Code
                  </Dialog.Title>
                  <form onSubmit={handleSubmit} className="mt-4">
                    <input
                      type="text"
                      name="newAccessCode"
                      className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder="New Access Code"
                      value={accessCode}
                      onChange={(e) => setAccessCode(e.target.value)}
                    />
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ChangeAccessCode;
