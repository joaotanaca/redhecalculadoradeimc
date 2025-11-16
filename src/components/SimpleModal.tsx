import React from 'react';
import { Modal, ModalOverlay, Dialog } from './application/modals/modal';
import { Button } from './base/buttons/button';
import { X } from '@untitledui/icons';

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const SimpleModal: React.FC<SimpleModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Modal>
        <Dialog className="max-w-md rounded-xl bg-primary p-6 shadow-lg ring-1 ring-primary">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-primary">{title}</h2>
            <Button color="tertiary" size="sm" onPress={onClose}>
              <X className="size-4" />
            </Button>
          </div>
          <div>{children}</div>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
};

