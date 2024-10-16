import {makeAutoObservable} from 'mobx';

class PermissionModalStore {
  isOpen = false;
  message = '';

  constructor() {
    makeAutoObservable(this);
  }

  setOpen(value: boolean) {
    this.isOpen = value;
  }

  setMessage(message: string) {
    this.message = message;
  }
}

const permissionModalStore = new PermissionModalStore();
export default permissionModalStore;
