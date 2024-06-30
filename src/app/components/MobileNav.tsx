import Link from 'next/link'

import { Fragment } from 'react'
import { MobileNavProps } from '../types'
import { IoClose } from 'react-icons/io5'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'

const MobileNav = ({ data, isOpen, onClose }: MobileNavProps) => {
    return (
        <nav>
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-zinc-950 bg-opacity-40" />
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="fixed inset-y-0 flex pl-20 max-w-full right-0 pointer-events-none">
                                <TransitionChild
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500"
                                    leaveTo="translate-x-full"
                                >
                                    <DialogPanel className="w-screen max-w-md pointer-events-auto">
                                        <div className="flex h-full flex-col py-6 border-l-2 border-taxi bg-dark-chocolate shadow-xl overflow-y-scroll">
                                            <div className="px-3 sm:px-6">
                                                <div className="flex items-start justify-end">
                                                    <div className="flex h-6 items-center">
                                                        <button
                                                            type="button"
                                                            onClick={onClose}
                                                            className="text-taxi focus:ring-2 focus:ring-taxi rounded-lg transition-colors"
                                                        >
                                                            <IoClose size={24} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='p-12'>
                                                <div className='grid grid-cols-1 gap-y-6 text-xl text-taxi'>

                                                    {data.map((link) => (
                                                        <Link
                                                            key={link.name}
                                                            href={link.address}
                                                            onClick={onClose}
                                                        >
                                                            {link.name}
                                                        </Link>
                                                    ))}

                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </nav>
    )
}

export default MobileNav